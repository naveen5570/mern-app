// routes/api/books.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
// Load Book model
//const Book = require('../../models/Book');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/user-test', auth,  (req, res) => 

res.send('user route testing!')

);

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', auth, (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/get-user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: 'No User found' }));
});

// @route GET api/users/login
router.post('/login', async(req, res) => {
    var query = { email: req.body.email};
    const user_data =  await User.find(query);
    if(user_data.length!=0)
    {
      bcrypt.compare(req.body.password, user_data[0].password, (err, data) => {
        //if error than throw error
        if (err) 
        {
          return err.status(401).json({ msg: "Password not correct" }) 
        }

        //if both match than you can do anything
        if (data) {
          
          return jwt.sign({id:user_data[0]._id}, config.get('jwtsecret'), {expiresIn:3600},
          (err,token) =>{
           if(err) throw err;
           res.status(200).json({ 
            token:token,
            name:user_data[0].name,
            msg: 'Login success' });
          }
          );
            
        } else {
            return res.status(401).json({ msg: "Invalid credentials" })
        }

    })
    
    }
    else
    {
        res.status(202).json({msg: 'user not found'});
    }
  
});




router.post('/',  async(req, res) => {
  var query = { email: req.body.email};
  const user_data =  await User.find(query);
  if(user_data.length==0)
  {
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  var password = await bcrypt.hash(req.body.password, salt);
  new User({
      name: req.body.name,
      email: req.body.email,
      password: password,
      otp_verified:'0'
      }).save(req.body)
      .then( user => { 
          jwt.sign({id:user.id}, config.get('jwtsecret'), {expiresIn:3600},
          (err,token) =>{
           if(err) throw err;
           res.status(200).json({ 
            token:token,
            msg: 'User registered successfully' });
          }
          );
          
      }
      )
      .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
  }
  else
  {
      res.status(202).json({msg: 'Sorry! This email already Registered'});
  }

});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: 'User entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user' }));
});

module.exports = router;