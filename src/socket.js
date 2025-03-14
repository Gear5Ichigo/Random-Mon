import { io } from 'socket.io-client';
import MainMenu from './mainmenu';

export default async () => {
    const socket = io();
    window.socket = socket;

    socket.on('init join', () => {
        console.log('connected');
    });
    
    socket.on('name change', player => {
        MainMenu.setName.value = player.name;
    })
};