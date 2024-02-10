const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to db: ", err);
    return;
  }
  console.log("Connected to database");
})

const fetchsql = `SELECT * FROM user`;

db.query(fetchsql, (err, results) => {
  if (err) {
    console.error("error: ", err);
    return;
  } else {
    console.log("retrieved data: ");
  }
  
  for (const row of results) {
    console.log("Name: ", row.name);
    console.log("Email: ", row.email);
  }
})


app.listen(3001, () => {
  console.log("Server running at port 3001");
})