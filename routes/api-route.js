const router = require('express').Router();
const db = require('../models/tracker');

// Get all workouts
router.get('/api/workouts', (req, res) => {
   db.find({})
   .then(data => {
       res.json(data)
   }) 
   .catch(err => {
       res.json(err);
   });
});
// Get one workout
router.post('/api/workouts', (req, res) => {
    db.create({})
    .then(data => 
        res.json(data)
    )
    .catch(err => {
        res.json(err)
    });
});
// Update workout
router.patch('/api/workouts/:id', (req, res) => {

})
// Delete workout?
router.delete('/:id', (req, res) => {
    
})

module.exports = router