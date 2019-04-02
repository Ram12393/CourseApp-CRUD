const mongoose = require('mongoose');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const courseRouter = require('./routes/course.route');
mongoose.connect('mongodb://localhost/playground').then(
    res => {
        console.log('Successfully connected to database');
    }
).catch(err => {
    console.log('connection failed to database');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/v1/api/course', courseRouter);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server is running on port number${port}`);
})