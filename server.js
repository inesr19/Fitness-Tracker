const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000

const app = express();

// morgan
app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Check if database is the problem
const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

// routes
require('./routes/api-route')(app);
require('./routes/html-route')(app);

// app listening
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});