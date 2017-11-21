
var express = require('express');
var router = express.Router();
var db = require('./db');
var expressSession = require('express-session');

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json({extended: false}));
router.use(expressSession({secret: 'top secret', resave: false, saveUninitialized: true}));

router.get('/', function(req, res){
	res.redirect('/login');

});

router.get('/login', function(req, res){
	if(req.session.login == true)
	{
		res.redirect('/home');
		
	}
	else{
		var msg = req.session.message;
		req.session.message = "";
		res.render('login',{"message": msg});
	}
	
});


router.post('/login', function(req, res){
	
	var username = req.body.username;
	var password = req.body.password;


	var q = "SELECT * FROM users where username='"+username+"' and password='"+password+"'";
    db.getData(q, null, function(result){
  	if(result.length > 0 ){
  		req.session.login = true;
  		res.redirect('/home/'+result[0].id);
  	}
  	else
  	{
  		res.render('login',{"message": "invalid username or password"});
  	}
    
  });


	

});

module.exports = router;