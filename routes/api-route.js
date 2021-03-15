const express = require('express');
const router = express.Router();
const Tracker = require('../models/tracker');

// Get all workouts
router.get('/api/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find()
        res.json(workouts)
    } catch (err){ 
        res.status(500).json({ message: err.message})
    }
})
// Get one workout
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Create one workout
router.post('/', (req, res) => {
    
})
// Update workout
router.patch('/:id', (req, res) => {

})
// Delete workout
router.delete('/:id', (req, res) => {
    
})

module.exports = router