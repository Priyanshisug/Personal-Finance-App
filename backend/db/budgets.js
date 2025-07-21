module.exports = function (connection) {
  return {
    retrieve: function (req, res, next) {
      connection.query(
        "SELECT category, category_limit_amount, color FROM application.budgets LIMIT 4",
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
      console.log(req.body);
      const { pot_name, target } = req.body;
      connection.query(
        "INSERT INTO application.budgets(category, category_limit_amount, color)VALUES(?, ?, ?);",
        [pot_name, target],
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
