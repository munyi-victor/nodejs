const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();
app.use(cors());

app.get("/users", (req, res) => {
  // Query the database to fetch user data
  pool.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
