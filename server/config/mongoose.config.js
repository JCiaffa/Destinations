const mongoose = require("mongoose");

//will create database with name here
mongoose
  .connect("mongodb://localhost/destination_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established Connection"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
