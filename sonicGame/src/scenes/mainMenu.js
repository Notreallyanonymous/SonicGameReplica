import kplay from "../kaplayCtx";
import  makeSonic  from "../ententies/sonic";


export default function mainMenu(){
    if(!kplay.getData("best-score")) kplay.setData("best-score" , 0); 
    kplay.onButtonPress("jump" , ()=> kplay.go("game"))

    const bgPieces = [
      kplay.add([kplay.sprite("chemical-bg"), kplay.pos(0, 0), kplay.scale(2), kplay.opacity(0.8) , kplay.area()]),
      kplay.add([
        kplay.sprite("chemical-bg"),
        kplay.pos(1920, 0),
        kplay.scale(2),
        kplay.opacity(0.8),
        kplay.area()
      ]),
    ];

    const platforms = [
        kplay.add([kplay.sprite("platforms"), kplay.pos(0, 450), kplay.scale(4)]),
        kplay.add([kplay.sprite("platforms"), kplay.pos(450, 900), kplay.scale(4)]),
      ];
    
    kplay.add([
        kplay.text("Sonic Ring Run" , {font: "mania" , size: 96}), 
        kplay.pos(kplay.center().x, 200), 
        kplay.anchor("center")
    ])

    kplay.add([
        kplay.text("Press any key to start" , {font: "mania" , size: 48}), 
        kplay.pos(kplay.center().x,  kplay.center().y -200), 
        kplay.anchor("center")
    ])

    makeSonic(kplay.vec2(200,745))

    kplay.onUpdate(()=>{
        if (bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + 1920 * 2, 0);
            bgPieces.push(bgPieces.shift());
          }
      
          bgPieces[0].move(-500, 0);
          bgPieces[1].moveTo(bgPieces[0].pos.x + 1920 * 2, 0);

        if(platforms[1].pos.x<0){
            platforms[0].moveTo(platforms[1].pos.x + platforms[1].width * 4 , 450)
            platforms.push(platforms.shift())

        }
        platforms[0].move(-1000, 0)
        platforms[1].moveTo(platforms[0].pos.x + platforms[1].width * 4 , 450)

    })
}