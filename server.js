const express = require('express');
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 3000;

//

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.static('node_modules/pixi.js/dist'));

//

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`) );

//

app.get('/', (req, res) => res.render('index') );
app.get('/pixi.min.mjs', (req, res) => res.sendFile(__dirname + '/node_modules/pixi.js/dist/pixi.min.mjs') );

//

io.on('connection', socket => {

});
