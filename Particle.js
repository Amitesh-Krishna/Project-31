class Particle {
    constructor(x,y,r) {
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.color = color(random(0,255),random(0,255),random(0,255));
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
