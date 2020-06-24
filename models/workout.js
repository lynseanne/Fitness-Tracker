const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day:{ type: Date, default: Date.now },
  exercises:[
  {type:{ type:String, trim: true, default: "Cardio", required: "Enter your excercise type" }},
  {name:{ type:String, trim: true, default:"Yoga", required: "Enter your excercise" }},
  {duration:{ type: Number, min: 5, index: true, required: "Enter minutes worked out" }},
  {weight:{ type: Number, min: 1, index: true }},
  {reps:{ type: Number, min: 1, index: true } },
 { sets:{ type: Number, min: 1, index: true }} ,
  ]
  });
  
  const Workouts = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workouts;
  