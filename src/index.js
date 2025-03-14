import { Application } from "pixi.js";
import GameAssets from "./assets";
import root from "./rootcontainer";
import MainMenu from "./mainmenu";
import socket from "./socket";

(async () => {

    const app = new Application();
    await app.init({background: 0xaaed6c, resizeTo: window});

    app.canvas.style.display = 'block';
    document.body.append(app.canvas);
    
    //

    await GameAssets.init(); // loads all assets
    await MainMenu.init();

    await socket()

    console.log(root);
    app.stage.addChild(root);

    //


    window.onresize = () => {
        app.stage.scale.set(innerWidth/root.nativeRes.width, innerHeight/root.nativeRes.height);
    }
    window.onresize();

    //

    app.ticker.add(ticker => {
        root.children.forEach(ch => ch.updateLoop(ticker))
    });

})();