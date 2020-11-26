class Rope {
    constructor(pointA,pointB,xoffset,yoffset){
        this.xoffset=xoffset;
        this.yoffset=yoffset;
        var options= {
            bodyA: pointA,
            bodyB: pointB,
            pointA:{x: this.xoffset, y: this.yoffset},
            stiffness:0.3
            
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope);

    } display() {
        var posA=(this.rope.bodyA.position)
        var posB=(this.rope.bodyB.position)

        strokeWeight(5);
        line(posA.x,posA.y,posB.x + this.xoffset, posB.y + this.yoffset);


    }
}