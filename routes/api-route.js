const express = require('express');
const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
    res.send('hello world')
})
// Get one workout
router.get('/:id', (req, res) => {
    req.params.id
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