const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require ('socket.io');

const app = express();
const PORT = 3001 || process.env.PORT;
const server = http.createServer(app);
const io = socketio(server);

//Set the constant folder of the webpage
app.use(express.static(path.join(__dirname,'public')));

// Socket communications
io.on('connection',socket => {
    console.log('Uj kliens!!')

    socket.emit('message','Üdv a szerveren!');

    //send the the paramter as message(parame)
    socket.on('param',msg => {
        console.log('tovabbitottam a parametert');
        io.emit('parame',msg)
    });
});



server.listen(PORT, () => console.log('Megy a szerver',PORT))
