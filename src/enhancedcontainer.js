import { Container } from "pixi.js";

export default class EnhancedContainer extends Container {
    addChild(/**/) {
        for (const arg of arguments) {
            arg.o_pos = arg.position.clone();
            super.addChild(arg);
        }
        if (arguments.length < 2) return arguments[0];
        else return arguments; 
    }

    resize() {
        this.children.forEach( ch => {
            const scale = {x: 1920/innerWidth, y: 1080/innerHeight};
            ch.scale.set(scale.x, scale.y);
            ch.position.set(ch.o_pos.x*scale.x, ch.o_pos*scale.y);
        })
    }
}