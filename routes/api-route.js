const db = require('../models/tracker');

module.exports = function(app) {
// Get all workouts
app.get('/api/workouts', (req, res) => {
   db.find({})
   .then(data => {
       res.json(data)
   }) 
   .catch(err => {
       res.json(err);
   });
});
//Create one workout
app.post('/api/workouts', (req, res) => {
   
     db.create(req.body)
     .then(data => 
         res.json(data)
     )
     .catch(err => {
         res.json(err)
     });
});

app.put('/api/workouts/:id', (req, res) => {
    db.findOneAndUpdate(
        {_id: req.params.id},
        {$push: { exercises: req.body}},
        {new: true}
    )
    .then(data => {
        res.json(data);
    })
})
// 
app.get('/api/workouts/range', (req, res) => {
    db.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
})
app.post('/api/workouts/range', (req, res) => {
    db.create({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
})
}