
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var db = require('./db');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json({extended: false}));
var s;
router.get('/:id', function(req, res){
	res.redirect('/home');
	s= req.params.id;
	
});

router.get('/', function(req, res){
	if(req.session.login != true)
	{
		res.redirect('/login');
		return;
	}
	var q = "SELECT * FROM chathistory,users where users.id=chathistory.userid order by chathistory.id desc limit 30";
  db.getData(q, null, function(result){
    var data = {'chat': result, 'user': s};
    res.render('home', data);
  });
	
});


module.exports = router;