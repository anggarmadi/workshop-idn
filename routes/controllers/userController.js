const db = require('../db');

exports.getUser = (req, res) => {
  const userId = req.params.id;

  const query = 'SELECT * FROM users WHERE id = ' + userId;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('Error');
    }

    res.json(results);
  });
};