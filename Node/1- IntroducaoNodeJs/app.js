var http = require("http");

http.createServer(function (request, response) {
    response.write("Primeiros passos com Node.js");
    response.end();
}).listen(2000);

console.log("Servidor rodando em http://localhost:2000");