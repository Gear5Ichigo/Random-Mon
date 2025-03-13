import { Assets } from "pixi.js";

export default class GameAssets {
    static async init() {
        this.manifest = {
            bundles: [
                {
                    name: 'fonts',
                    assets: [
                        {alias: 'minecraft', src:'/assets/fonts/Minecraft.ttf'},
                        {alias: 'gameboy', src:'/assets/fonts/Early GameBoy.ttf'}
                    ]
                },
                {
                    name: 'mainmenu',
                    assets: [
                        {alias: 'logo', src: '/assets/sprites/randommon-logo.png'},
                        {alias: 'ball', src: '/assets/sprites/pokeball.png'}
                    ]
                }
            ]
        }
        await Assets.init({ manifest: this.manifest });
    
        this.mainmenu = await Assets.loadBundle('mainmenu', progress => {
            console.log(progress);
        });
        
        this.fonts = await Assets.loadBundle('fonts', progress => {
            console.log(progress);
        });
    }
}

