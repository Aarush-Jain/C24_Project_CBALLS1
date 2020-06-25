class Dustbin{
    constructor(x,y,height,angle){
        var options= {
            isStatic:true,
            restitution:0,
            friction:1.0
        };
        this.body=Bodies.rectangle(x,y,15,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);

        World.add(world,this.body);
    };

    display(){
        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
    }
}