const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Enter the type of exercise.'
        },
    name: {
        type: String,
        trim: true,
        required: 'Enter the name of the exercise.'
    },
    duration: {
        type: Number,
        required: 'Enter the duration of the exercise (mins).'
    },
    weight: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    distance: {
        type: Number,
        trim: true
    }
    }]
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;