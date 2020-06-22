//server framework to build single/multi page web applications
const express = require("express");
//node module for mongodb that emulates the official mongodb API 
const mongojs = require("mongojs");
//node mod for error tracking 
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitnessTracker";
const collections = ["fitness"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});
