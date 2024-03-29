var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", require("./routes/usersRoute.js"));
app.use("/colors", require("./routes/colorsRoute.js"));
app.use("/carts", require("./routes/cartsRoute.js"));
app.use("/ratings", require("./routes/ratingsRoute.js"));
app.use("/products", require("./routes/productsRoute.js"));
app.use("/manufacturers", require("./routes/manufacturersRoute.js"));

module.exports = app;
