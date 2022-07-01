const jwt = require('jsonwebtoken');
const config = require('config');

function auth (req, res, next){
 const token = req.header('x-auth-token');
 console.log(token);
 if(!token){
  res.status(401).json({msg:'You do not have permissions to access this'})   
 }   

 try
 {
//verify token
const decoded = jwt.verify(token, config.get('jwtsecret'));
// Add user from payload
req.user = decoded;
next();
 }
 catch(e)
 {
res.status(400).json({msg:'You do not have permissions to access this'});
 }
 
}

module.exports = auth;