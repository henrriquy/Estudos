var express = require('express');
var app = express();
var serv = require('http').Server(app);
var SOCKET_LIST = {};
var countUser = 0;
var topA = 70;
var topB = 70;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client/'));

serv.listen(2000, function () {
    console.log('Listening to port 2000')
});

var io = require('socket.io')(serv, {});

io.sockets.on('connection', function (socket) {
    console.log('Socket Connection');

    socket.id = countUser;
    ++countUser;
    var player = 1;
    if (socket.id % 2 === 0)
        player = 2;

    socket.player = player;

    socket.top = 0;
    socket.down = 0;
    SOCKET_LIST[socket.id] = socket;


    socket.on('keyPress', function (data) {
        if (data.inputId === 'Up' && data.state === true) {
            socket.top = 5;
        }
        else if (data.inputId === 'Up' && data.state === false) {
            socket.top = 0;
        }
        if (data.inputId === 'Down' && data.state === true) {
            socket.down = 5;
        }
        else if (data.inputId === 'Down' && data.state === false) {
            socket.down = 0;
        }
    });

    

});

setInterval(function () {
    var pack = [];//array para guardar dados
    for (var i in SOCKET_LIST) {
        //guarda em variavel para facilitar
        var socket = SOCKET_LIST[i];

        if (socket.player === 1) {
            //add incrementos na raquete A
            topA = topA + (socket.down - socket.top);
        }
        else {//idem raquete B
            topB = topB + (socket.down - socket.top);
        }
        pack.push({
            id: socket.id,
            topA: topA,
            topB: topB,
            player: socket.player,
        });
        socket.emit('movePaddle', pack);

    }
}, 1000 / 25);

