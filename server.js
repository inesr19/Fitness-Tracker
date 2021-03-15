const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

// routes
const apiRouter = require('./routes/api-route');
app.use('/workouts', apiRouter);

// app listening
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});