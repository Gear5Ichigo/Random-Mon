import { io } from 'socket.io-client';

const socket = io();

socket.on('init join', () => {
    console.log('connected');
});

export default socket;