
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground2,ground3,ground4,ground5;
var ground,ball,ball2,ball3,ball4,ball5; 
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,150,10,40);
	ground2=new Ground(680,150,10,40);
	ground3=new Ground(760,150,10,40);
	ground4=new Ground(520,150,10,40);
	ground5=new Ground(440,150,10,40);
	ball=new Ball(600,450,30);
	ball2=new Ball(680,450,30);
	ball3=new Ball(760,450,30);
	ball4=new Ball(520,450,30);
	ball5=new Ball(440,450,30);
	rope1=new Rope(ball.body,ground.body,0,0);
	rope2=new Rope(ball2.body,ground2.body,0,0);
	rope3=new Rope(ball3.body,ground3.body,0,0);
	rope4=new Rope(ball4.body,ground4.body,0,0);
	rope5= new Rope(ball5.body,ground5.body,0,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);



ground.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
ball.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW) {
		console.log("helwoaka")
		Matter.Body.applyForce(ball5.body,ball3.body.position,{x:-10,y:-2});
	}
}
