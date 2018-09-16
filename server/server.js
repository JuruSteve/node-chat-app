const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('new user connected');
    socket.on('disconnect', ()=>{
        console.log('User was disconnected from server')
    })
})

server.listen(port, ()=>{
    console.log(`server started at *: ${port}`);
})