class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 40
        }
        //this.bodyB = bodyB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
      
    fly(){
        this.sling.bodyA = null;
    }   

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}