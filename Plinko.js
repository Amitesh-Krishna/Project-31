class Plinko {
    constructor(x,y,r) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.color = "white";
        World.add(world, this.body);
        ellipseMode(RADIUS);
    }
    display(){
        push();
        var pos =this.body.position;
        fill(this.color);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
};
