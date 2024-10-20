import kplay from "../kaplayCtx";
import makeSonic from "../ententies/sonic";
import { makeMotobug } from "../ententies/motobug";
import {makeRing} from "../ententies/rings"


export default function Game(){
    kplay.setGravity(3100);

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

      const platformsWidth = 1280;
      const platforms = [
          kplay.add([kplay.sprite("platforms"), kplay.pos(0, 450), kplay.scale(4)]),
          kplay.add([kplay.sprite("platforms"), kplay.pos(450, 900), kplay.scale(4)], kplay.area()),
        ];

        let score = 0

        let scoreMultiplyer = 0;

        const sonic = makeSonic(kplay.vec2(200,745))
        sonic.setControls();
        sonic.setEvents();
        sonic.onCollide("enemy",  (enemy)=>{
          if(!sonic.isGrounded()){
            kplay.play("destroy" , {volume: 0.5}); 
            kplay.play("hyper-ring" , {volume: 0.5})
            kplay.destroy(enemy)
            sonic.play("jump")
            sonic.jump()

            return
          }

          kplay.play("hurt" ,   {volume: 0.5})
          kplay.go("gameover")
        })

        sonic.onCollide("ring",  (ring)=>{
            kplay.play("hyper-ring" , {volume: 0.5})
            kplay.destroy(ring)
            score++
        })
    

        let gameSpeed = 300; 

        kplay.loop(1, ()=>{
            gameSpeed += 50
        }); 

        const spawnMotoBug = () => {
          const motobug = makeMotobug(kplay.vec2(1950, 773));
          motobug.onUpdate(() => {
            if (gameSpeed < 3000) {
              motobug.move(-(gameSpeed + 300), 0);
              return;
            }
            motobug.move(-gameSpeed, 0);
          });
      
          motobug.onExitScreen(() => {
            if (motobug.pos.x < 0) kplay.destroy(motobug);
          });
      
          const waitTime = kplay.rand(0.5, 2.5);
      
          kplay.wait(waitTime, spawnMotoBug);
        };
      
        spawnMotoBug();

        const spawnRing = () =>{
          const ring = makeRing(kplay.vec2(1950, 745))

          ring.onUpdate(() => {
            if (gameSpeed < 3000) {
              ring.move(-(gameSpeed + 300), 0);
              return;
            }
            ring.move(-gameSpeed, 0);
          });
      
          ring.onExitScreen(() => {
            if (ring.pos.x < 0) kplay.destroy(ring);
          });
      
          const waitTime = kplay.rand(0.5, 3);
      
          kplay.wait(waitTime, spawnRing);
        }

        spawnRing()

        kplay.add([
            kplay.rect(1920, 300), 
            kplay.opacity(0), 
            kplay.area() , 
            kplay.pos(0,832), 
            kplay.body({isStatic: true}), 

        ])



        kplay.onUpdate(()=>{
            if (bgPieces[1].pos.x < 0) {
                bgPieces[0].moveTo(bgPieces[1].pos.x + 1920 * 2, 0);
                bgPieces.push(bgPieces.shift());
              }
          
              bgPieces[0].move(-100, 0);
              bgPieces[1].moveTo(bgPieces[0].pos.x + 1920 * 2, 0);

                // for jump effect
              bgPieces[0].moveTo(bgPieces[0].pos.x, -sonic.pos.y / 10 - 50);
              bgPieces[1].moveTo(bgPieces[1].pos.x, -sonic.pos.y / 10 - 50);

              if(platforms[1].pos.x<0){
                platforms[0].moveTo(platforms[1].pos.x + platformsWidth * 4 , 450)
                platforms.push(platforms.shift())
    
            }
            platforms[0].move(-gameSpeed, 0)
            platforms[1].moveTo(platforms[0].pos.x + platformsWidth * 4 , 450)


        })
}