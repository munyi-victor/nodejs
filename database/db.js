const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
};


const connection = mysql.createConnection(config);

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to DB");
    return;
  } else {
    console.log("Connected to DB succesfully");
  }
})

module.exports = connection;