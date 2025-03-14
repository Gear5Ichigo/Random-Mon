import { Application } from "pixi.js";
import GameAssets from "./assets";
import root from "./rootcontainer";

(async () => {

    const app = new Application();
    await app.init({background: 0xaaed6c, resizeTo: window});

    app.canvas.style.display = 'block';
    document.body.append(app.canvas);
    
    //

    await GameAssets.init(); // loads all assets

    console.log(root);
    app.stage.addChild(root);

    //

    app.ticker.add(ticker => {
        
    });

    return app;

})();