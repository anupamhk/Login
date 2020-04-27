var express = require('express');
var router = express.Router();

/* GET home page. */
var users=[
  {
    email : 'anupam@gmail.com', password : 'password'
  }
]
router.get('/', function(req, res, next) {
  res.send("welcome to bakcened")
});
req.post('/login',function(req,res){
  let result=users.find(user => user.email==req.body.email);
  if(result{
    if(result.password==req.body.password){
      res.status(200).send(
        {
          message: "Login Successful!"
        }
      )
    else{
      res.status(200).send(
      {
        message: "password incorrect"
      }
      )}
      else{
        res.status(200).send({
          message : "user not found!"
        })
      }
    }
    }
  })
})

module.exports = router;
