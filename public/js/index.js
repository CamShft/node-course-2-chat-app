var socket = io();

socket.on('connect',function () {
  console.log('Connected to server');

  socket.emit('createMessage',{
    from:'samy@testing.com',
    text:'Testing.. 1..2....3 Testing'
  });
});



socket.on('disconnect',function () {
  console.log('disconnect from server');
});

socket.on('newMessage',function(message){
  console.log('newMessage',message);
});
