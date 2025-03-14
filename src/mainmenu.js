import { Graphics, Sprite, Text } from "pixi.js";
import EnhancedContainer from "./enhancedcontainer";
import GameAssets from "./assets";
import root from "./rootcontainer";
import { FancyButton, Input } from "@pixi/ui";

export default class MainMenu {
    static async init() {

        //

        this.container = new EnhancedContainer();
        root.addChild(this.container);

        //

        this.logo = this.container.addChild(new Sprite(GameAssets.mainmenu.logo));
        this.logo.scale = 0.33; this.logo.anchor = 0.5;
        this.logo.position.set(this.logo.width/2, this.logo.height/2+5);

        this.playersOnlineCount = this.container.addChild(new Text({text: 'Players Online: n/a', style: {fontFamily: 'Minecraft'}}));
        this.playersOnlineCount.position.set(this.logo.width, this.logo.height-25);

        //

        this.interactives = this.container.addChild(new EnhancedContainer());
        this.interactives.bg = this.interactives.addChild(new Graphics().rect(0, 0, 450, 800)).fill(0xffffff);
        this.interactives.zIndex = -1;
        this.interactives.position.set(30, this.logo.height+20);

        this.nameLabel = this.interactives.addChild(new Text({text: 'Name: ', x: 5, y: 10, style: {fontFamily: 'Minecraft'}}))
        this.setName = this.interactives.addChild(new Input({
            bg: new Graphics().rect(0, 0, this.interactives.bg.width*0.66, 40).fill(0xaaff66).stroke({color: 0x000000, width: 3}),
            textStyle: {fontFamily: 'Minecraft'}
        }));
        this.setName.position.set(this.nameLabel.x+this.nameLabel.width, 5)
        this.setName.onEnter.connect(() => {
            socket.emit('name change', this.setName.value);
        });

        this.button = this.#makeButton(this.interactives, {
            text: 'Lobbies',
            position: {x: 10, y: this.setName.position.y+this.setName.height+20}
        });

        //

        this.container.updateLoop = ticker => {

        }
    }

    static #makeButton(cont, options) {
        const button = cont.addChild(new FancyButton({
            defaultView: new Graphics().rect(0, 0, 200, 60).fill(0xFFFF66).stroke({width: 3, color: 0x000000}),
            text: options.text || 'Label'
        }));
        button.textView.style.fontFamily = 'Minecraft';
        if (options.position) {
            button.position.set(options.position.x, options.position.y);
        } else {
            button.x = options.x || 0; button.y = options.y || 0;
        }
        return button;
    }
}