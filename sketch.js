var cBall,ground,dustbinImg;
var dustbinSprite;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	cBall = new Paper(100,450,14);	

	ground = new Ground(400,650,800,20);

	dSideRight = new Dustbin(597,595,70,PI);
	dSideLeft = new Dustbin(675,595,70,PI);
	dSideBottom = new Dustbin(637.5,630,90,PI/2);

	launcher = new Launcher(cBall.body,{x:100,y:350})

	dustbinSprite = createSprite(637.5,575,125,70)
	dustbinSprite.addImage(dustbinImg);
	dustbinSprite.scale = 0.4
 	
	Engine.run(engine);
  
}


function draw() {
  background(255);
  ground.display();
  dSideRight.display();
  dSideLeft.display();
  dSideBottom.display();
  cBall.display();
  launcher.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(cBall.body,cBall.body.position,{x:38,y:-38});
	}
   }

function mouseDragged(){
    Matter.Body.setPosition(cBall.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}