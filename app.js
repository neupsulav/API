const express = require("express");
const app = express();
const noRoute = require("./middleware/noRoute");
require("dotenv").config();
const User = require("./models/model");
const connection = require("./db/connection");
app.use(express.json());

// port
const port = process.env.PORT;

// router
const route = require("./router/route");
app.use("/api", route);

// middlewares
app.use(noRoute);

// listening to server
const listen = async () => {
  try {
    await connection(process.env.connectionString);
    app.listen(port, () => {
      console.log(`Connected to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

listen();
