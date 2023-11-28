"use strict";

require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

//console.log(`Process::`, process.env);

// init middlewares
app.use(morgan("dev"));
// app.use(morgan("dev"))  //  dev
// app.use(morgan("combined")) // production
// app.use(morgan("common"))
// app.use(morgan("short"))
// app.use(morgan("tiny"))

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// init db
require("./dbs/init.mongodb.js");

//check connect
const { countConnect } = require("./helpers/check.connect.js");
countConnect();

//check overload
const { checkOverload } = require("./helpers/check.connect.js");
checkOverload();

// init router
app.use("/", require("./routes"));

// hanling error

module.exports = app;
