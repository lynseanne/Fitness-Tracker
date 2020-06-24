//server framework to build single/multi page web applications
const express = require("express");
//node module for mongooose 
const mongoose = require("mongoose");
//node mod for error tracking 
const logger = require("morgan");

const app = express();

const db = require("./models");

const PORT = process.env.PORT || 6312;

//logger/morgan must come before other app.use 
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/exercise", (req,res)=>{
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})


app.get("/exercise?", (req,res)=>{
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})

app.get("/api/workouts", (req,res)=>{
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})
app.post("/api/workouts", ({body},res)=>{
  db.Workout.create({body})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})

app.get("/stats", (req,res)=>{
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})



// Listen on port 6312
app.listen(PORT, () => {
  console.log("🦄  App running on port 6312!");
});
