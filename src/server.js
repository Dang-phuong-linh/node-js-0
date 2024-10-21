require("dotenv").config();
const express = require("express");

const configViewEngine = require("./config/viewEngine.js");
const webRoutes = require("./routes/web.js");
//connection
const connection = require("./config/database.js");

const app = express(); //app express
const port = process.env.PORT || 8888; //hard code
const hostname = process.env.HOST_NAME;

//config req.body, lay data tu phia client gui len
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for form data

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
