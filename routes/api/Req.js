// routes/api/Requests.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
// Load Book model
//const Book = require('../../models/Book');
const Request = require('../../models/Request');
const Application = require('../../models/Application');
const auth = require('../../middleware/auth');

// @route GET api/books/test
// @description tests books route
// @access Public
const Req = mongoose.model("Request");
const Appl = mongoose.model("Application");
const Reqq = require('../../models/Request');
router.get('/',function(req,res){
 res.send('test'); 
});


router.get('/request-list', (req, res) => {
  //console.log('test');
  Reqq.find({status:"1"})
    .then(reqqs => res.json(reqqs))
    .catch(err => res.status(404).json({ noreqqsfound: 'No reqqs found' }));
});

router.get('/applied-requests', (req, res) => {
  Reqq.find({status:'2'})
    .then(reqqs => res.json(reqqs))
    .catch(err => res.status(404).json({ noreqqsfound: 'No reqqs found' }));
});

router.get('/completed-requests', (req, res) => {
  Reqq.find({status:'3'})
    .then(reqqs => res.json(reqqs))
    .catch(err => res.status(404).json({ noreqqsfound: 'No reqqs found' }));
});

router.get('/professional-active-requests', (req, res) => {
  Reqq.find({status:'4'})
    .then(reqqs => res.json(reqqs))
    .catch(err => res.status(404).json({ noreqqsfound: 'No reqqs found' }));
});










router.post('/place', function(req,res){

  //console.log('tttt');
  
  new Req({
        specialisation: req.body.specialisation,
        repair_explanation: req.body.repair_explanation,
        repair_immediately: req.body.repair_immediately,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        country: req.body.country,
        state_or_province: req.body.state_or_province,
        zipcode: req.body.zipcode,
        city: req.body.city,
        status: "1",
        user_id: req.body.user_id
    }).save(function(err,doc){
    if(err)res.json(err);
    else res.json({ msg: 'Request Placed Successfully' });
      
      });
    });

router.post('/apply', function(req,res){
  new Appl({
    time_of_service: req.body.time_of_service,
    fees: req.body.fees,
    request_applied: req.body.request_applied,
    professional_id: req.body.professional_id
}).save(function(err,doc){
if(err)res.json(err);
else 
{
  var myquery = { _id: mongoose.Types.ObjectId(req.body.request_applied) }; 
  var newvalues = { $set: {status: 2 } }; 
  Reqq.updateOne(myquery, newvalues, function(err1, res1){
  if(err1) throw err1;
  else res.json({ msg: 'Request Applied Successfully' });
  
  });

}
});
});


router.get('/pending-requests/:id', (req, res) => {
  Reqq.find({user_id:req.params.id,status:"1"})
    .then(reqqs => res.json(reqqs))
    .catch(err => res.status(404).json({ noreqqsfound: 'No reqqs found' }));
});


router.get('/active-requests/:id', (req, res) => {
  Reqq.find({user_id:req.params.id,status:"4"})
    .then(reqqs => res.json(reqqs))
    .catch(err => res.status(404).json({ noreqqsfound: 'No reqqs found' }));
});

router.get('/request-applications/:id', (req, res) => {
  //console.log(req.params.id);
  Reqq.find({status:'2',user_id:req.params.id})
    .then(reqqs => res.json(reqqs))
    .catch(err => res.status(404).json({ noreqqsfound: 'No reqqs found'+req.params.id }));
});

// get a request via id

router.get('/:id', (req, res) => {
  
  Reqq.findById(req.params.id)
  .then(Reqq => res.json(Reqq))
  .catch(err => res.status(404).json({ noreqqfound: 'No reqq found' }));
});



module.exports = router;