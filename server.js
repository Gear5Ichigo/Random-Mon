const express = require('express');
const { createServer } = require('http');
const path = require('path');
const { Server } = require('socket.io')

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 3000;

//

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/pixi.js', express.static(__dirname + '/node_modules/pixi.js/dist/pixi.min.mjs'));

//

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`) );

//

app.get('/', (req, res) => res.render('index') );

//

io.on('connection', socket => {

});
