const express = require("express");
const stripe = require("stripe")("sk_test_51KqNoBEsO5lD4LSjbxwyaHilhLYJWqex3nkAu35puvfYNEZbMdlcReu4qmsAri5GgpDN8B2kuraLLcuIZy6vWSKz0019XGf6of");
const {v4: uuidv4} =require();
const router = express.Router();
router.get('/',(req, res, next)=>{
console.log("Get Response from Researcher");
res.json({
message: 'it works'
});
});

router.post('/pay',(req,res,next)=>{
console.log(req.body.token);
const {token, amount} = req.body;
const idempotencyKey = uuidv4();
return stripe.customers.create({
email: token.email,
source: token    
}).then(customer=>{
stripe.charges.create({
   amount: amount*100,
   currency:'usd',
   customer: customer.id,
   receipt_email: token.email 
},{idempotencyKey})    
}).then(result=>{
 res.status(200).json(result);   
}).catch(err=>{
  console.log(err);  
})
});

module.exports = router;