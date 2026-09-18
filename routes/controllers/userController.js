const db = require('../db');

exports.getUser = (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`; // ⚠️ Rentan
  db.query(query, (err, results) => {
    if (err) return res.status(500).send('Error');
    res.json(results);
  });
};

