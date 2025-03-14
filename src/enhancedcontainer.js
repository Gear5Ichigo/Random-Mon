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
}