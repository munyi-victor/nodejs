const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hired'
})

db.connect((err) => {
  if (err) {
    console.error(err);
  }

  console.log('connected to database');
})

app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM student'
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data');
      return;
    } else {
      res.status(200).json(results);
    }
  })
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})