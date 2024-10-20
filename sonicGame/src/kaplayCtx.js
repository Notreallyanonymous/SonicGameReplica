import kaplay from "kaplay";
import mainMenu from "./scenes/mainMenu";

 const kplay = kaplay({
    width: 1920,
    height: 1080, 
    letterbox: true, 
    background: [0,0,0], 
    global: false, 
    touchToMouse: true,
    buttons:{
        jump:{
            Keyboard:["space", "up" , "w"], 
            mouse: "left", 
        },
    },
    debugKey: "d", 
    debug: true
});

export default kplay