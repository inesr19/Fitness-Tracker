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
//Create one workout
router.post('/api/workouts', (req, res) => {
    db.create({})
    .then(data => 
        res.json(data)
    )
    .catch(err => {
        res.json(err)
    });
});

router.post('/api/workouts/:id', (req, res) => {
    
})
// 
router.get('/api/workouts/range', (req, res) => {

})
// 
router.post('/api/workouts/range', (req, res) => {
    
})

module.exports = router