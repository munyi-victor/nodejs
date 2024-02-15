const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
};


const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error("Error connecting to database:", err);
});

module.exports = pool;