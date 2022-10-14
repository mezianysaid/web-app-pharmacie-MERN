var express = require('express');
var cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport')
const connectDB = require('./src/config/_db') 
require("dotenv").config()

const app=express();
const originPath = process.env.path 
const port1 = process.env.port1
const port2 = process.env.port2

connectDB()   // connecttion to database

app.use(express.json({extended:false}));
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
const corsOptions ={
  origin:"*", 
  credentials:true,    
  accessControlAllowCredentials:true,
  accessControlAllowOrigin: "*",
  accessControlAllowMethods:"GET,PUT,POST,DELETE,PATCH,OPTIONS",
  optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(passport.initialize())
app.use('/public/images', express.static('public/images'));

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
      var valError = [];
      Object.keys(err.errors).forEach(key => valError.push(err.errors[key].message));
      res.status(422).send(valError);
  }
});

// product's routes
const productRoute = require('./src/routes/_products.route')
app.use('/api/products',productRoute);

// CLIENT'S OPINIONS ROUTES 
const clientsopinion= require('./src/routes/_clientsopinion.route')
app.use('/api/clientsopinion',clientsopinion)

// user's routes 
const userroute = require('./src/routes/_users.route')
app.use('/api/user',userroute)

// send email 
const emailRoute = require('./src/routes/_email.route')
app.use('/api/email',emailRoute)

app.listen(5000 || 3200 ,() => console.log("the server is running"))