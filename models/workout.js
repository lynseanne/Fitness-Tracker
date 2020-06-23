const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day:{ type: Date, default: Date.now },
  type:{ type:String, trim: true },
  name:{ type:String, trim:true, default:"Yoga" },
  duration:{ type: Number, min: 5, index: true },
  weight:{ type: Number, min: 1, index: true },
  reps:{ type: Number, min: 1, index: true } ,
  sets:{ type: Number, min: 1, index: true } ,

  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  