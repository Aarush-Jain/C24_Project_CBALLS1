class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        };
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paperball.png");
        World.add(world,this.body)
    };

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
    };
};