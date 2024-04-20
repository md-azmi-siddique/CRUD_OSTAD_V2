const express = require('express');
const router = require("./src/route/api")

const app = express();
const bodyParser = require("body-parser");

//security
const hpp = require('hpp');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const path = require("path")


// Database
const mongoose = require('mongoose');


//security middleware implementation
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());


//Body Parser
app.use(bodyParser.json())

//Rate Limiter
const limiter = rateLimit({windowMs:15*60*100, max:3500});


//Database Connect



//Connect Frontend
app.use(express.static("client/dist"))

//ADD Frontend routing
app.use('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

//access api
app.use("/api/v1", router);







module.exports = app;