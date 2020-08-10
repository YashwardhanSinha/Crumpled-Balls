
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin1, dustbin2;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ball=createSprite(90, 680, 20, 20);
	ball.shapeColor = "red";

	ground = createSprite(650,650,200,100);
	ground.shapeColor = "green";

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 680 , width, 20 , {isStatic:true} );
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.x= ball.position.x 
  ball.y= ball.position.y 
  rect(ground.position.x,ground.position.y,width,20);

  drawSprites();
 
}



