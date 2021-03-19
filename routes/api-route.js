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

app.put('/api/workouts/:id', (params, res) => {
    db.updateOne()
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
}