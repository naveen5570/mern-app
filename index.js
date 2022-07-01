// app.js

const express = require('express');
const connectDB = require('./config/db');
const auth = require('./middleware/auth');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');  



// Stripe routes
const striperoutes = require('./routes/stripe-route');


// routes
const requests = require('./routes/api/Req');
const applications = require('./routes/api/Application');
const books = require('./routes/api/books');

const users = require('./routes/api/Users');
const Professionals = require('./routes/api/Professionals');

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(cors());
// Connect Database
connectDB();
app.use(cookieParser());
// cors
//app.use(cors({ origin: true, credentials: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });



/*
app.get('/setcookie', (req, res) => {
  res.cookie('email','test');
  res.send('Cookie have been saved successfully');
});

*/

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));






// use Routes
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api/professionals', Professionals);
app.use('/api/requests', requests);
app.use('/api/applications', applications);
app.use('/api/stripe', striperoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/react-frontend/build/index.html'));
});
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
