const express = require("express");
const data = require("./data");
const products = require("./data");
const app = express();

app.listen(8000, () => {
  console.log("All work");
});
app.get("/api/products", (req, res) => {
  res.status(200).json({ msg: products });
});
