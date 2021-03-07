const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
    static: './build',
})
const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log('Server is running');
})

const express = require('express');
 const favicon = require('express-favicon');
 const path = require('path');
 const port = process.env.PORT || 8080;
 
 // здесь у нас происходит импорт пакетов и определяется порт нашего сервера
 const app = express();
 app.use(favicon(__dirname + '/build/favicon.png')); 
 
 //здесь наше приложение отдаёт статику
 app.use(express.static(__dirname));
 app.use(express.static(path.join(__dirname, 'build')));
 
 //простой тест сервера
 app.get('/ping', function (req, res) {
  return res.send('pong');
 });
 
 //обслуживание html
 app.get('/*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
 app.listen(port);