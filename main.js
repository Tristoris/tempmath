//constants
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



io.on('connection', socket => {
    console.log("user connected");
    socket.emit("hello", "world", (response) => {
        console.log(response); // "got it"
      }); // emit an event to the socket
    io.emit('broadcast', /* … */); // emit an event to all connected sockets
    socket.on('reply', () => { /* … */ }); // listen to the event
});

server.listen(3000);

app.get('/', (req, res) => {
    
    res.send('<html><p>ballsack</p></html>');
});