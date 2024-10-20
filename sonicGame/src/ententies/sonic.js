import kplay from "../kaplayCtx";


export default function makeSonic(pos){
    const sonic = kplay.add([
        kplay.sprite( "sonic" , {anim: "run"}), 
        kplay.scale(4), 
        kplay.area(), 
        kplay.anchor("center"), 
        kplay.pos(pos), 
        kplay.body({jumpForce: 1700}),
        {
            setControls()  {
                kplay.onButtonPress("jump" , ()=>{
                    if(this.isGrounded()){
                        this.play("jump");
                        this.jump("");
                        kplay.play("jump" , {volume: 0.5})

                    }
                })
            }, 

            setEvents(){
                this.onGround(()=>{
                    this.play("run")
                })
            }
        }
    ]); 

    return sonic
}