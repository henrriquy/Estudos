var app = require('http').createServer(resposta);
var fs = require('fs');
var io = require('socket.io')(app);
var objPingPong = new PingPong();


app.listen(3000);
console.log("Aplicação está em execução...");
function resposta(req, res) {
    var arquivo = "";
    if (req.url == "/" || req.url == "\\") {
        arquivo = __dirname + '/index.html';
    } else {
        arquivo = __dirname + req.url;
    }
    fs.readFile(arquivo,
        function (err, data) {
            if (err) {
                res.writeHead(404);
                return res.end('Pagina ou arquivo nao encontrados.');
            }
            res.writeHead(200);
            res.end(data);
        });
}
io.on("connection", function (socket) {
    io.emit("teste socket","Salsi fufu");
});