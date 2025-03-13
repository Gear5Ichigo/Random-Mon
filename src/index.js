import { Application } from "pixi.js";
import Game from "./game";
import socket from "./socket";

(async () => {

    const app = new Application();
    await app.init({background: 0x000000, resizeTo: window});

    app.canvas.style.display = 'block';
    document.body.append(app.canvas);

    console.log(Game)

    app.ticker.add(ticker => {
        
    });

})();