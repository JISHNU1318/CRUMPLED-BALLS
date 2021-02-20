
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
  
	paper1=new Paper();

	

	
  
}


function draw() {
  Engine.update(engine);	
  rectMode(CENTER);
  background(230);

 
 
  
  groundObject.display();
  dustbinObj.display();
  paper1.display();

}

function keyPressed(){
	if(keyCode===32){
		Body.applyForce(paper1.paper,paper1.paper.position,{x:50,y:-50});
	}
}