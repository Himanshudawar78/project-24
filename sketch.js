
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,box4;
var p;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Box(400,680,800,20);
	box2 = new Box(600,660,140,10);
    box3 = new Box(530,625,10,70);
	box4 = new Box(670,625,10,70);
    p = new Paper(150,100,10);
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);

box1.display();
box2.display();
box3.display();
box4.display();
p.display();
}



