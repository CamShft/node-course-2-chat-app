const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New user connected');

  socket.emit('newMessage',{
    from:'sam@example.com',
    text:'Hey. What is going on,',
    createAt:123456789
  });

  socket.on('createMessage',(message)=>{
    console.log('createMessage',message);
  });

  socket.on('disconnect',()=>{
    console.log('User was disconnected');
  });
});

server.listen(port,()=>{
  console.log(`Started up at port ${port}`);
});