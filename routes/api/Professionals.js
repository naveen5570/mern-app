// routes/api/books.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// Load Book model
//const Book = require('../../models/Book');
const Professional = require('../../models/Professional');
const auth = require('../../middleware/auth');
// let’s you use the cookieParser in your application

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/professional-test', auth,  (req, res) => 

res.send('professional route testing!')

);

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Professional.find()
    .then(professionals => res.json(professionals))
    .catch(err => res.status(404).json({ noprofessionalsfound: 'No professionals found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/view-profile/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://1835-103-81-212-22.ngrok.io');
  console.log('adfadfadf=>'+req.params.id);
  Professional.findById(req.params.id)
    .then(Professional => res.json(Professional))
    .catch(err => res.status(404).json({ noprofessionalfound: 'No Professional found' }));
});





router.get('/user-test',  (req, res) => 

console.log('ttt')

);
// @route GET api/professionals/login
router.post('/login', async(req, res) => {
  //console.log('t');
    res.cookie('email','afadsfdsftest');
    var query = { email: req.body.email};
    const professional_data =  await Professional.find(query);
    if(professional_data.length!=0)
    {
      bcrypt.compare(req.body.password, professional_data[0].password, (err, data) => {
        //if error than throw error
        if (err) 
        {
          return err.status(401).json({ msg: "Password not correct" }) 
        }

        //if both match than you can do anything
        if (data) {
          
          
          
          return jwt.sign({id:professional_data[0]._id}, config.get('jwtsecret'), {expiresIn:3600},
          (err,token) =>{
           if(err) throw err;
           res.status(200).json({ 
            token:token,
            name:professional_data[0].displayName,
            city:professional_data[0].city,
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
        res.status(202).json({msg: 'Not found'});
    }
  
});




router.post('/',  async(req, res) => {
  var query = { email: req.body.email};
  const professional_data =  await Professional.find(query);
  if(professional_data.length==0)
  {
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set professional password to hashed password
  var password = await bcrypt.hash(req.body.password, salt);
  new Professional({
      name: req.body.name,
      email: req.body.email,
      password: password,
      status:'1'
      }).save(req.body)
      .then( professional => { 
          jwt.sign({id:professional.id}, config.get('jwtsecret'), {expiresIn:3600},
          (err,token) =>{
           if(err) throw err;
           res.status(200).json({ 
            token:token,
            msg: 'Professional registered successfully' });
          }
          );
          
      }
      )
      .catch(err => res.status(400).json({ error: 'Unable to add this professional' }));
  }
  else
  {
      res.status(202).json({msg: 'Sorry! This email already Registered'});
  }

});








// Professional Profile

router.post('/profile',   async(req, res) => {
  var query = { _id: req.body.user_id};
  var newvalues = {$set: {displayName:req.body.name,description:req.body.description,photo_id:req.body.photo_id,registered_address:req.body.registered_address,office_address:req.body.office_address,country:req.body.country,state_or_province:req.body.state_or_province,radius_to_cater:req.body.radius_to_cater,zipcode:req.body.zipcode,city:req.body.city,specialisation:req.body.specialisation,experience:req.body.experience,qualification:req.body.qualification,standard_fees:req.body.standard_fees,professional_card:req.body.professional_card}};
    
  Professional.updateOne(query, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    
}); 
// res.redirect('/admin/login');
return res.status(202).json({msg: 'updated'});
});






// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Professional.findByIdAndUpdate(req.params.id, req.body)
    .then(professional => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Professional.findByIdAndRemove(req.params.id, req.body)
    .then(professional => res.json({ mgs: 'Professional entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a professional' }));
});

module.exports = router;