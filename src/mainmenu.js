import { Sprite } from "pixi.js";
import { Screen } from "./screens";
import GameAssets from "./assets";

export default class MainMenu extends Screen {
    static async init() {
        super.init();

        this.logo = await this.insert(new Sprite(GameAssets.mainmenu.logo))
        this.logo.scale.set(0.5, 0.5);
        this.logo.x = innerWidth/2;

    }

    static updateLoop(ticker) {

    }
}