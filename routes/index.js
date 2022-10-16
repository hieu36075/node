var express = require('express');
var authen = require('../model/authenticator')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',  function(req, res, next) {
  res.render('login', {  title: 'LOGIN PAGE' });
});
router.post('/login', async function(req, res, next) {
  console.log('username: ' + req.body.username)
  console.log('password: ' + req.body.password)
  const username = req.body.username;
  const password = req.body.password;
  let authenticated = await authen(username,password);
  if(authenticated == true)
  {
    res.render('login', {  title: 'Dang nhap thanh cong' });
  }
  else
  {
    res.render('login', {  title: 'Dang nhap that bai' });
  }
  
});

module.exports = router;
