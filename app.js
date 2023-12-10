// ============== applications configures ==============
const express = require('express');
const router = require('./src/Routes/api');
const app = new express;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const monogoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');


app.use (bodyParser.json());


app.use (cors());
app.use (hpp());
app.use (helmet());
app.use (monogoSanitize());
app.use (rateLimit());
app.use (express.json());
app.use (express.urlencoded({ extended: true }));


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use (limiter);


// database connection
const database = "mongodb+srv://mdjasim97:mdjasim97@cluster0.qmiylu3.mongodb.net/CRUD";
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database connected Successfully");
}).catch(()=>{
    console.log("database not connected");
});


app.use('/api/v2', router)

app.get("*", (req, res)=>{
    res.send("404 page not found");
})

module.exports = app