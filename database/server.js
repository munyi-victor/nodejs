const express = require("express");
const cors = require("cors");

const connection = require("./db");

const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

// app.get("/users", (req, res) => {
//   // Query the database to fetch user data
//   pool.query("SELECT * FROM user", (err, results) => {
//     if (err) {
//       console.error("Database query error:", err);
//       res.status(500).send("Internal Server Error");
//       return;
//     }
//     res.json(results);
//   });
// });

// const data = {
//   name: "Munyi Victor",
//   email: "munyivictor6@gmail.com",
//   password:"password"
// }

// const sql = "INSERT INTO user SET ?"

// connection.query(sql, data, (error, results) => {
//   if (error) {
//     console.error("Error inserting data");
//     return;
//   } else {
//     console.log("Data inserted", results);
//   }
// })

app.get("/users", (req, res) => {
  const selSql = "SELECT * FROM user";

  connection.query(selSql, (error, result) => {
    if (error) {
      console.error("Error retrieving data");
      return res.status(500).json({ error: "Internal Server Error" });
    } else {
      // console.log("Retrieved data successfully!", result);
      res.json(result);
    }
  });
})

app.post("/addUser", (req, res) => {
  const { name, email, password } = req.body;

  const insertQuery = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";

  connection.query(
    insertQuery, [name, email, password], (error, results) => {
      if (error) {
        console.error("Error adding user", error);
        return res.status(500).json({ error: "Internal server error" });
      } else {
        console.log(results);
        res.json({ message: "User created successsfully!" });
      }
    }
  );
})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
