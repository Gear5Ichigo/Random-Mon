import { Application, Container, Graphics, Sprite, Text } from "pixi.js";
import Game from "./game";
import { Button, FancyButton } from "@pixi/ui";
import MainMenu from "./mainmenu";
import GameAssets from "./assets";
import { Screen2 } from "./screens";

(async () => {

    const app = new Application();
    await app.init({background: 0xaaed6c, resizeTo: window});

    app.canvas.style.display = 'block';
    document.body.append(app.canvas);

    await GameAssets.init();
    await MainMenu.init();
    await Game.init();

    const joenbama = new Screen2();
    const a = joenbama.addChild(new Graphics());
    console.log(a);

    app.stage.addChild(MainMenu.container);

    app.stage.children.forEach( e => {
        e.o_pos = e.position.clone();
    });

    function resize() {
        app.resizeTo = window;
        app.stage.children.forEach(e => {
            const scale = {x: innerWidth/1920, y: innerHeight/1080};
            e.scale.set(scale.x, scale.y);
            console.log(e.o_pos.y);
            e.position.set(e.o_pos.x*scale.x, e.o_pos.y*scale.y);
        });
    }

    resize();
    window.onresize = resize;

    app.ticker.add(ticker => {
        app.stage.children.forEach( s => s.parentScreen.updateLoop(ticker) )
    });

})();