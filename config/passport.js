const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
passport.use(new LocalStrategy((email,password,done)=>{
User.findOne({email},(err,user)=>{
if(err)
 return done(err);
if(!user)
 return done(null,false);

});
}));