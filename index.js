// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const auth = require('./middleware/auth');

// routes
const books = require('./routes/api/books');
const users = require('./routes/api/Users');
const Professionals = require('./routes/api/Professionals');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));

if(process.env.NODE_ENV == "production"){
  app.use(express.static("./client/build"));
  const path = require("path");
  app.get("*", (req, res) => {`enter code here`
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })
}

app.get('/', (request, response) => {

  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  
   });

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// use Routes
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api/professionals', Professionals);
const port = process.env.PORT || 8082;






app.listen(port, () => console.log(`Server running on port ${port}`));