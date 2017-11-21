var path = require('path');
var express = require('express');
var router = express.Router();
var db = require('./db');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var mime = require('mime')
var multer  = require('multer')
var expressValidator = require('express-validator');

var expressSession = require('express-session');
 
 var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/img/'))
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
var upload = multer({ storage: storage });

router.use(expressValidator());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json({extended: true}));

router.get('/', function(req, res){
	res.render('registration',{message: [{msg:""}]});
});


router.post('/', upload.single('photo'),function(req, res){
	req.check('RePassword', 'Passwords do not match').equals(req.body.Password);

	var problems = req.validationErrors();

	if(problems)
	{
		res.render('registration', {message: problems});
	}

var Username = req.body.Username;
var FullName = req.body.FullName;
var Password = req.body.Password;
var photo = req.file.filename;
var q = "INSERT INTO `users`(`username`, `fullaname`, `password`, `photo`, `ConnectionID`) VALUES ('"+Username+"','"+FullName+"','"+Password+"','"+photo+"','0')";
  db.getData(q, null, function(result){
  	   
       req.session.message = "Registration Successfull...";
       res.redirect('/login');
  		
  	
    
  })

});



module.exports = router;