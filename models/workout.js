const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day:{ type: Date, default: Date.now },
  exercises:[
  {type:{ type:String, trim: true, required: "Enter your excercise type" }},
  {name:{ type:String, trim: true, required: "Enter your excercise" }},
  {duration:{ type: Number, min: 5, required: "Enter minutes worked out" }},
  {weight:{ type: Number, min: 1}},
  {reps:{ type: Number, min: 1} },
  {sets:{ type: Number, min: 1}} ,
  ],
  totalDuration:{type: Number}
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  