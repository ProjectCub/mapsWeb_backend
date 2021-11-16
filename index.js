const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world ");
  console.log("new user");
});

app.listen(2000, () => console.log("2000 started"));
