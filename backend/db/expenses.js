module.exports = function (connection) {
  return {
    retrieve: function (req, res, next) {
      connection.query(
        "SELECT sum(abs(amount)) AS `expenses` FROM application.transactions WHERE amount>0",
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
