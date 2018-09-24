const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

mongoose.connect(
  "mongodb://diego:di123456@ds213513.mlab.com:13513/senai-node",
  {
    useNewUrlParser: true
  }
);

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000);
