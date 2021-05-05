const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require ('socket.io');

const app = express();
const PORT = 3001 || process.env.PORT;
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//run when a client connects
io.on('connection',socket => {
    console.log('Uj kliens!!')

    socket.emit('message',{ name: "John" });
});



server.listen(PORT, () => console.log('Megy a szerver',PORT))