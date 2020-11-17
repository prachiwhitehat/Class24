const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var pig1,pig2;
var ground;
var log1, log2;

function setup() {
 var canvas= createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,320,50,50);
  box2 = new Box(920,320,50,50);
  
  pig1 = new Pig(200,100);
  
  log1 = new Log(200,300,100,PI/2);

  ground = new Ground(600,height,1200,20);
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  

  box1.display();
  box2.display();
  
  pig1.display();
 
  log1.display();
  ground.display();
  //drawSprites();
}