var express = require('express');
var authen = require('../model/authenticator')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN PAGE' });
});
  // Process for POST require
  router.post('/login', async function(req, res, next) {
 
    const username = res.username;
    const password = res.password;
    let authenticated = await authen(username,password);
    if(authenticated == true)
    {
      console.log('thanh cong');
    }
    else
    {

console.log('That bai');
    }
    
  });


module.exports = router;
