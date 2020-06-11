
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: { 
        type: Date, 
        default: Date.now
    },
    exercises: 
        [{
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        required: "Please enter name of workout.",
        minlength: 1
    },
    duration: {
        type: Number,
        required: "Enter duration.",
        min: 1,
    },
    weight: {
        type: Number,
        required: "Enter amount of weight.",
        min: 1,
    },
    reps: {
        type: Number,
        required: "Enter amount of reps.",
        min: 1,
    },
    sets: {
        type: Number,
        required: "Enter amount of sets.",
        min: 1,
    }
        }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;