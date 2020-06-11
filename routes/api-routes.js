const app = require("express").Router();
const db = require("../models/workout.js");

// ROUTE FOR GETTING STATS DATA FOR 7 DAYS
app.get("/api/workouts/range", (req, res) => {
    db.find({})
    .limit(7)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// ROUTE FOR GETTING LAST WORKOUT
app.get("/api/workouts", (req,res) => {
    db.find({})
    .then(data => {        
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

// ROUTE TO CREATE NEW WORKOUT
app.post("/api/workouts", (req, res) => {
    db.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// ROUTE FOR PUSHING EXERCISE BY id
app.put("/api/workouts/:id", ({body, params}, res) => {
    db.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
    .then(exercise => {
      res.json(exercise);
    })
    .catch(err => {
      res.json(err);
    })
});


module.exports = app;