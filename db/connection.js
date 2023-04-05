const mongoose = require("mongoose");

const connection = async (connectionString) => {
  return mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connection;
