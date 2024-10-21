require("dotenv").config();

//get the client
const mysql = require("mysql2");

//test connection
//create the conection to the dtb
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //k truyen thi gia tri mac dinh la 3306
//   user: process.env.DB_USER, //default: empty (dang nhap k can password)
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //k truyen thi gia tri mac dinh la 3306
  user: process.env.DB_USER, //default: empty (dang nhap k can password)
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
