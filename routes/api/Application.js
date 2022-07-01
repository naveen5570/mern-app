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


var db = mongoose.connection;
router.get('/request-applications/:id', (req, res1) => {
      //Application.find({request_applied:req.params.id})
      //.then(reqqs => res.json(reqqs))
      //.catch(err => res.status(404).json({ noreqqsfound: 'No applications found' }));
      db.collection('applications').aggregate([
        {
            $match: {
                'request_applied': mongoose.Types.ObjectId(req.params.id)
            }
        },
         { $lookup:
          {
            from: 'professionals',
            localField: 'professional_id',
            foreignField: '_id',
            as: 'professionaldetails'
          }
        }
        ]).toArray(function(err, res) {
        if (err) throw err;
        else
        {
        console.log(JSON.stringify(res));
        res1.json(res);
        reqqs => res1.json(res)  
      }
  });

});



// get a Application via id

router.get('/view-application/:id', (req, res1) => {
 //console.log('adad');
    db.collection('applications').aggregate([
        {
            $match: {
                '_id': mongoose.Types.ObjectId(req.params.id)
            }
        },
        { $lookup:
           {
             from: 'requests',
             localField: 'request_applied',
             foreignField: '_id',
             as: 'appdetails'
           }
         },
         { $lookup:
          {
            from: 'professionals',
            localField: 'professional_id',
            foreignField: '_id',
            as: 'professionaldetails'
          }
        }
        ]).toArray(function(err, res) {
        if (err) throw err;
        else
        {
        console.log(JSON.stringify(res));
        res1.json(res);
        application => res1.json(res)  
      }
  });  
    
});




module.exports = router;