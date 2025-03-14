const express = require('express');
const { createServer } = require('http');
const { networkInterfaces } = require('os');
const { Server } = require('socket.io')

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 3000;

//

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.static('dist'));
app.use('/assets', express.static('assets'));

//

server.listen(PORT, () => {
    console.log(`\nListening on ... \n`);
    Object.values(networkInterfaces()).forEach( interface => {
        interface.forEach( n => {
            if (n.family !== 'IPv4') return;
            console.log(`\t>\t\x1b[34mhttp://${n.address}:${PORT}`);
        });
    });
    console.log('');
});

//

app.get('/', (req, res) => res.render('index') );

//

const players = []

io.on('connection', socket => {
    const player = {
        name: 'RandomMon Guest',
        socket_id: socket.id
    };
    io.to(socket.id).emit('name change',player);

    players.push(player);
    socket.emit('init join', socket.id);
    console.log(players);

    socket.on('name change', name => {
        player.name = name;
        io.to(socket.id).emit('name change', player);
    })

    socket.on('disconnect', () => {
        players.splice(players.indexOf(player), 1);
        console.log(players);
    })

});
