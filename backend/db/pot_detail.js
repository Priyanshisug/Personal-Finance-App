module.exports = function (connection) {
  return {
    retrieve: function (req, res, next) {
      connection.query(
        "SELECT pot_name, money_saved, target AS `pots`, color FROM application.pots",
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
  };
};
