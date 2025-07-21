module.exports = function (connection) {
  return {
    retrieve: function (req, res, next) {
      connection.query(
        "SELECT * FROM application.transactions",
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
      const { transaction, transaction_category, amount, date_of_transaction } =
        req.body;
      connection.query(
        "INSERT INTO application.transactions(transaction, transaction_category, amount, date_of_transaction)VALUES(?, ?, ?, ?);",
        [transaction, transaction_category, amount, date_of_transaction],
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
