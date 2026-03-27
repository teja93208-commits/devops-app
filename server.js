const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps App via Jenkins 🚀Testing Automated!");
});

app.listen(3000, '0.0.0.0', () => console.log("Running on port 3000"));