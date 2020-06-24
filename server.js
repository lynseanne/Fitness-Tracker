//server framework to build single/multi page web applications
const express = require("express");
//node module for mongooose 
const mongoose = require("mongoose");
//node mod for error tracking 
const logger = require("morgan");

const app = express();


const PORT = process.env.PORT || 6312;

//logger/morgan must come before other app.use 
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// const URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

// mongoose.connect(URI, {
//   useUnifiedTopology:true,
//   useNewURLParser:true,
//   useFindAndModify: false
// })

require("./controller/api-routes")(app)
require("./controller/html-routes")(app)


// Listen on port 6312
app.listen(PORT, () => {
  console.log("🦄  App running on port 6312!");
});
