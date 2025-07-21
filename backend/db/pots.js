module.exports = function (connection) {
  return {
    retrieve: function (req, res, next) {
      connection.query(
        "SELECT pot_name, color, money_saved AS `pots` FROM application.pots LIMIT 4",
        function (err, result, fields) {
          if (err) {
            console.error(err);
            res.status(500);
            res.json({ error: err });
          } else {
            res.status(200);
            res.json(result);
          }
        }
      );
    },
    insert: function (req, res, next) {
      const { pot_name, target, color } = req.body;
      connection.query(
        "INSERT INTO application.pots(pot_name, target, color, money_saved)VALUES(?, ?, ?,0);",
        [pot_name, target, color],
        function (err, result, fields) {
          if (err) {
            console.error(err);
            res.status(500);
            res.json({ error: err });
          } else {
            res.status(200);
            res.json({ message: "Configuration Saved!" });
          }
        }
      );
    },
  };
};
