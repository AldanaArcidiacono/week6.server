import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3500;
// Crea un servidor http con el metodo create, devuelve un obj una funcion factory
// en ese objeto tiene un servidor
const server = http.createServer((request, response) => {
    request.method;
    request.url;
    response.write('Hola mundo, soy Aldana');
    response.end();
});

server.listen(port);
console.log('listen on port ', port);
