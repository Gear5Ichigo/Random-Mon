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

//

server.listen(PORT, () => console.log(`Listening on ${PORT}`) );

app.get('/', (req, res) => res.render('index') );

io.on('connection', socket => {

});
