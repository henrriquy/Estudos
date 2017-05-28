//Primeira forma de retornar arquivos
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (request, response) {
//     fs.readFile("index.html", function (err, data) {
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.end(data);
//     });
// }).listen(2000, '127.0.0.1');
// console.log("Servidor rodando em http://127.0.0.1:2000");

//Segunda forma de retornar arquivos
//Instale o seguinte pacote - npm install node-static
//O seguinifica que vai baixa o pacote para uso em todos os projetos node

// var static = require("node-static");
// var http = require('http');

// var fileServer = new static.Server('.', {
//     cache: 7000,
//     headers:
//     {
//         'Content-Type': 'text/html'
//     }
// });

// http.createServer(function handler(request, response) {
//     fileServer.serve(request, response, function (err, resp) {
//         if(err){
//             console.log(err);
//         }
//     });
// }).listen(2000, '127.0.0.1');
// console.log("Servidor rodando em http://127.0.0.1:2000");



//Terceira forma de excutar arquivos no node
//npm install http-server -g
//Após instalar o pacote a nivel global, basta executar o comando no console
// comando: http-server