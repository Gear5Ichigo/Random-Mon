import { Container } from "pixi.js";

class Screen extends Container {
    static async init() {
        this.container = new Container();
        this.container.parentScreen = this;
    }

    static async insert(e) {
        this.container.addChild(e);
        return e;
    }

    static updateLoop(ticker) {

    }

    static resize() {

    }
}

class Screen2 extends Container {
    addChild(/**/) {
        for (const arg of arguments) {
            arg.o_pos = arg.position.clone();
            super.addChild(arg);
        }
        if (arguments.length < 2) return arguments[0];
        else return arguments; 
    }

    updateLoop(ticker) {this.deltaTime = ticker.deltaTime/ticker.FPS;}

    resize() {
        this.children.forEach( ch => {
            const scale = {x: 1920/innerWidth, y: 1080/innerHeight};
            ch.scale.set(scale.x, scale.y);
            ch.position.set(ch.o_pos.x*scale.x, ch._o_pos*scale.y);
        })
    }
}

export { Screen, Screen2 }