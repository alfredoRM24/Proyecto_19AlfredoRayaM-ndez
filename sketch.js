const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

var btn1;
var btn2;

var obstacle
var obstacle2
var obstacle3
var obstacle4

var win 
var win2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 // Text("alcanza los rectangulos dorados para ganar puntuacion ",200,20);

  btn1 = createImg("right.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hforce);

  btn2 = createImg("up.png");
  btn2.position(20,30);
  btn2.size(30,30);
  btn2.mouseClicked(vforce);
  
  ground =new Ground(200,390,400,10);
  right = new Ground(390,200,25,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,10);
  obstacle = new Ground(100,300,70,20);
  obstacle2 = new Ground(300,200,70,20);
  obstacle3 = new Ground(170,100,70,20);
  obstacle4 = new Ground(200,250,50,20);
  win = new Ground(100,40,10,10);
  win2 = new Ground(300,40,10,10);
  var option ={
   restitution : 0.95
  };


  ball = Bodies.circle(200,200,20,option);

  World.add (world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  obstacle.show();
  obstacle2.show();
  obstacle3.show();
  obstacle4.show();
  win.show();
  win2.show();
  ellipse(ball.position.x,ball.position.y,10);
  Engine.update(engine);
 
}

function hforce(){
  Matter.Body.applyForce (ball,{x:0,y:0},{x:0.02,y:0});
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01});
}
