// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const auth = require('./middleware/auth');
const cookieParser = require('cookie-parser');
 


// Stripe routes
const striperoutes = require('./routes/stripe-route');


// routes
const requests = require('./routes/api/Req');
const applications = require('./routes/api/Application');
const books = require('./routes/api/books');

const users = require('./routes/api/Users');
const Professionals = require('./routes/api/Professionals');

const app = express();

// Connect Database
connectDB();
app.use(cookieParser());
// cors
//app.use(cors({ origin: true, credentials: true }));
app.use( (req, response, next)=> {
  response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  next();
});
app.use(cors());



/*
app.get('/setcookie', (req, res) => {
  res.cookie('email','test');
  res.send('Cookie have been saved successfully');
});

*/

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));


if ( process.env.NODE_ENV == "production"){

  app.use(express.static("react-frontend/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'react-frontend', 'build', 'index.html'));

  })


}



// use Routes
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api/professionals', Professionals);
app.use('/api/requests', requests);
app.use('/api/applications', applications);
app.use('/api/stripe', striperoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));