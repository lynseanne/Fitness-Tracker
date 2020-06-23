//server framework to build single/multi page web applications
const express = require("express");
//node module for mongodb that emulates the official mongodb API 
const mongojs = require("mongojs");
//node mod for error tracking 
const logger = require("morgan");

const app = express();

const PORT = process.env.PORT || 6312;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true });





// Listen on port 6312
app.listen(PORT, () => {
  console.log("🦄  App running on port 6312!");
});
