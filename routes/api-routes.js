const router = require("express").Router();
const db = require("../models/workout.js");

// ROUTE FOR GETTING STATS DATA FOR 7 DAYS
router.get("/api/workouts/range", (req, res) => {
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
router.get("/api/workouts", (req,res) => {
    db.find({})
    .then(data => {        
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});




module.exports = router;