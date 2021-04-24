const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObject	
var world;

function setup() {
	createCanvas(1600, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper = new Paper(200,450,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(360);


  groundObject.display();
  dustbinObj.display();
  paper.display() 
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95})
	}
}

