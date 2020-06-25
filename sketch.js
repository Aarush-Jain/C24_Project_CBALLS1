var cBall,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	cBall = new Paper(100,450,15);	

	ground = new Ground(400,650,800,20);

	dSideRight = new Dustbin(575,595,70,PI);
	dSideLeft = new Dustbin(700,595,70,PI);
	dSideBottom = new Dustbin(637.5,630,125,PI/2);
 	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  cBall.display();
  ground.display();
  dSideRight.display();
  dSideLeft.display();
  dSideBottom.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(cBall.body,cBall.body.position,{x:41,y:-41});
	}
   }