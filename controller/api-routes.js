const db = require("../models")


module.exports = function (app){


  //display all workouts
  app.get("/api/workouts", (req,res)=>{
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })

  //post request for new workout
  app.post("/api/workouts", ({body},res)=>{
    db.Workout.create({body})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })
  
  //display workout range
  app.get("/api/workouts/range", (req,res)=>{
    db.Workout.find({})
    .then(dbWorkoutRange => {
      res.json(dbWorkoutRange);
    })
    .catch(err => {
      res.json(err);
    });
  })

 // Respond to a PUT request to the /api/workouts route
  app.put("/api/workouts/:id", (req,res)=>{
    db.Workout.updateOne({_id: req.params.id},
        { $push: { exercise: req.body }, $inc:{totalDuration: req.body.duration}}, 
        (err,dbWorkoutUpdate)=>{
        if (err) res.status(418).json(err)
        res.json(dbWorkoutUpdate)
    })
    
  })
}