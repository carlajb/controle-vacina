const express = require("express");
const app = express();
const index = require("./router/index");
const rgvax = require("./router/rgvax");

//require("./models/Registration")


app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.options("/*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers")
    res.header(
        "Access-Control-Allow-Methods",
        "PUT,POST,GET,DELETE,OPTIONS,PATCH"
    );
    res.send("send some thing whatever")
});

    app.use("/vaccines", rgvax)
    app.use("/", index);
    module.exports = app;