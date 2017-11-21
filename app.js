//require
var express = require('express');
var app = express();
var path = require('path');
var Socketio = require('socket.io');
var login = require('./login')
var registration = require('./registration')
var home = require('./home')
var logout = require('./logout')
var db = require('./db');
var date = require('date-and-time');

var expressSession = require('express-session');

//server
var server = app.listen(1337,function(){
	console.log('Server Started at port 1337');
})
//socket config
var io = Socketio(server);
//config
app.set('view engine', 'ejs');
//middleware
app.use('/', login);
app.use('/registration', registration);
app.use('/home', home);
app.use('/logout', logout);

app.use(express.static('./public/contents'));
app.use(express.static('./public/scripts'));
app.use(express.static('./public/img'));

var currentUser =[];


//
io.sockets.on('connection', function(socket){
	console.log('Connected [ID: ' + socket.id + ']');

	socket.on('disconnect', function(){
		var q = "UPDATE `users` SET `ConnectionID`='0' WHERE ConnectionID='"+socket.id+"'";
		db.getData(q, null, function(result){
			
				for (var i = 0; i < currentUser.length; i++) {
					
				if(currentUser[i].ConnectionID == socket.id){
					
					currentUser.splice(i,1);
				}
			}
			
			io.sockets.emit('update list', {'list':currentUser,'count':currentUser.length});
       });
		
	});
	socket.on('typing', function(data){
		socket.broadcast.emit('typing', {'message':data.message});
		
	});
	socket.on('me connected', function(data){
		console.log(currentUser);
		var alreadyexist = false;
		for (var i = 0; i < currentUser.length; i++) {
					
				if(currentUser[i].id == data.user){
					
					alreadyexist = true;
					io.sockets.emit('update list', {'list':currentUser,'count':currentUser.length});
					break;
				}
			}

			if(alreadyexist==false){
					var q = "UPDATE `users` SET `ConnectionID`='"+socket.id+"' WHERE id='"+data.user+"'";
					db.getData(q, null, function(result){
					var q = "SELECT * FROM users where id='"+data.user+"'";
					db.getData(q, null, function(result){
			       	currentUser.push(result[0]);
			       	console.log(currentUser)
			       		
			       	
					
					io.sockets.emit('update list', {'list':currentUser,'count':currentUser.length});
						});
			       });
			}

		
       });
		
	socket.on('send data', function(data){	
		    var now = new Date();
			var msgtime = date.format(now, 'hh:mm A');

	   var q = "INSERT INTO `chathistory`(`userid`, `message`, `time`) VALUES ("+data.user+",'"+data.message+"','"+msgtime+"')";
       db.getData(q, null, function(result){
       
       });


       var q = "SELECT * FROM users where id='"+data.user+"'";
       db.getData(q, null, function(result){
       var newdata = {'message':data.message ,
       					'photo' : result[0].photo,
       					'fullname': result[0].fullaname,
       					'time'  : msgtime
       				};

       io.sockets.emit('incoming data', newdata);
       });
		
	});
});




