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
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	cBall = new Paper(300,300,14);	

	ground = new Ground(600,650,1200,20);

	dSideLeft = new Dustbin(830,595,90,PI);
	dSideRight = new Dustbin(910,595,90,PI);
	dSideBottom = new Dustbin(870.5,630,90,PI/2);

	launcher = new Launcher(cBall.body,{x:300,y:300})

	dustbinSprite = createSprite(870.5,575,125,70)
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

function mouseDragged(){
    Matter.Body.setPosition(cBall.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}