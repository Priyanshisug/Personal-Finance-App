const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const { createHash } = require("crypto");
const jwt = require("jsonwebtoken");
const { passwordStrength } = require("check-password-strength");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Passport Login Strategy verify JWT on each login
 */
passport.use(
  new JWTstrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.data);
      } catch (error) {
        done(error);
      }
    }
  )
);

module.exports = function (connection) {
  /**
   * Passport Login Strategy to fetch Login details from Salesforce and verify ID and Password
   */
  passport.use(
    "login",
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          connection.query(
            `SELECT * from \`people\` where email=${connection.escape(
              email
            )} and password='${createHash("sha256")
              .update(connection.escape(password))
              .digest("hex")}'`,
            function (err, results, fields) {
              if (err || results.length == 0) {
                console.error(err);
                return done(null, false, {
                  message: "Something Went wrong",
                  status: 401,
                });
              } else {
                return done(
                  null,
                  { ...results[0] },
                  { message: "Logged in Successfully" }
                );
              }
            }
          );
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  return {
    register: function (req, res, next) {
      if (
        !req.body.password ||
        !req.body.email ||
        !req.body.name ||
        req.body.password.trim().length == 0 ||
        req.body.email.trim().length == 0 ||
        req.body.name.trim().length == 0 ||
        passwordStrength(req.body.password.trim()).value != "Strong"
      ) {
        return res.status(400).send({ error: "Invalid Password Criteria" });
      }
      connection.query(
        `INSERT INTO application.users (name, email, password, created_at, is_active) VALUES(${connection.escape(
          req.body.name.trim()
        )},${connection.escape(req.body.email.trim())}, '${createHash("sha256")
          .update(connection.escape(req.body.password.trim()))
          .digest("hex")}', CURRENT_TIMESTAMP, b'1');`,
        function (err, results, fields) {
          if (err) {
            return res.status(500).send({ error: "Something went wrong!" });
          } else {
            return res.status(200).send({ message: "User Created" });
          }
        }
      );
    },
    login: function (req, res, next) {
      let d = Math.floor(Date.now() / 1000);
      passport.authenticate("login", async (err, user, info) => {
        try {
          if (err || !user) {
            return res.status(400).send({ error: "INVALID REQUEST" });
          }
          req.login(user, { session: false }, async (error) => {
            if (error) {
              return next(error);
            }
            const expiry = d + 60 * 60;
            const token = jwt.sign(
              {
                iat: d,
                nbf: d,
                exp: expiry,
                iss: "https://api.tkaur.app",
                aud: "https://api.tkaur.app",
                data: { id: user.id, email: user.email },
              },
              JWT_SECRET
            );
            return res.json({
              token: token,
              expiry: expiry,
              email: user.email,
            });
          });
        } catch (error) {
          return next(error);
        }
      })(req, res, next);
    },
  };
};
