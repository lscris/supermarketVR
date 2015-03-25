/* supermarketVR */


var express = require('express');
var _ = require('underscore');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8080;

app.use(express.static(__dirname + '/public'));
http.listen(port);

// app.listen(port);
console.log("listening port " + port);


app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (socket){
  socket.on('message',function (data){
    console.log('message received from server is: ' + data.pitch);
      io.sockets.emit('message',{pitch:data.pitch,roll:data.roll,yaw:data.yaw});
  });
});