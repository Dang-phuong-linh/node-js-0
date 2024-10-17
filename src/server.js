require("dotenv").config();
const express = require("express");

const configViewEngine = require("./config/viewEngine.js");
const webRoutes = require("./routes/web.js");

const mysql = require("mysql2");

const app = express(); //app express
const port = process.env.PORT || 8888; //hard code
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

//test connection
//create the conection to the dtb
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, //k truyen thi gia tri mac dinh la 3306
  user: "root", //default: empty (dang nhap k can password)
  password: "123456",
  database: "hoidanit",
});
//simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(results); //contains rows returned by server
  console.log("field =>", fields); //contain extra meta data about result
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
