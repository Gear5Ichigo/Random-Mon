import { Application } from '/pixi.js';

(async () => {

    const app = new Application();
    await app.init({background: 0x000000, resizeTo: window});

    app.canvas.style.display = 'block';
    document.body.append(app.canvas);

    app.ticker.add(ticker => {

    });

})();