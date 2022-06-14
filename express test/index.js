const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(process.env);
});
