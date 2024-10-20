import kplay from "../kaplayCtx";

export function makeMotobug(pos){
    return kplay.add(
        [
            kplay.sprite("motobug", { anim: "run" }), 
            kplay.area({shape: new kplay.Rect(kplay.vec2(-5,0), 32 ,32 )}), 
            kplay.scale(4), 
            kplay.anchor("center"), 
            kplay.pos(pos), 
            kplay.offscreen(), 
            "enemy",
        ]
    );
}