import kplay from "./kaplayCtx.js";
import mainMenu from "./scenes/mainMenu.js";
import game from "./scenes/games.js"

kplay.loadSprite("chemical-bg" , "graphics/chemical-bg.png")
kplay.loadSprite("platforms" , "graphics/platforms.png")
kplay.loadSprite("sonic" , "graphics/sonic.png" , {
    sliceX: 8, 
    sliceY: 2, 
    anims: {
        run: {from: 0, to: 7, loop: true, speed: 30}, 
        jump: {from: 8, to: 15, loop: true, speed: 100}, 
    },
})

kplay.loadSprite("ring" , "graphics/ring.png" , {
    sliceX: 16, 
    sliceY: 1, 
    anims: {
        spin: {from: 0, to: 15, loop: true, speed: 30}, 
    },
});


kplay.loadSprite("motobug" , "graphics/motobug.png" , {
    sliceX: 5, 
    sliceY: 1, 
    anims: {
        run: {from: 0, to: 4, loop: true, speed: 8}, 
    },
});


kplay.loadFont("mania" , "fonts/mania.ttf")
// kplay.loadSound("hurt" , "sounds/Hurt.wav")
kplay.loadSound("hyper-ring" , "sounds/HyperRing.wav")
kplay.loadSound("jump" , "sounds/Jump.wav")
kplay.loadSound("ring" , "sounds/Ring.wav")
kplay.loadSound("city" , "sounds/city.wav")
kplay.loadSound("destroy" , "sounds/destroy.wav")


kplay.scene("main-menu" , mainMenu)


kplay.scene("game" , game)


kplay.scene("gameover" , ()=>{
    
})

kplay.go("main-menu")





