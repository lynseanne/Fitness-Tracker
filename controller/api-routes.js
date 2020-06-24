const db = require("../models")


module.exports = function (app){


  //get all workouts
  app.get("/api/workouts", (req,res)=>{
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })

  //post all workouts ---> {body} is to post entire body 
  app.post("/api/workouts", ({body},res)=>{
    db.Workout.create({body})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })
  
  app.get("/api/workouts/range", (req,res)=>{
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })


  app.put("/api/workouts", ({body},res)=>{
    db.Workout.create({body})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })
}