const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine;
var world;
var ball;

var chain;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ball = new Ball(200, 200, 20);


  //create a pendulum
  var options1 = {
    pointA: { x: 200, y: 50 },
    bodyB: ball.body,
    pointB:{x:0,y:0},
    length: 100,
    stiffness : 1
  }
  chain = Constraint.create(options1);
  World.add(world, chain);

 
 
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ball.show();
  push();
  stroke("red");
  strokeWeight(4);
  line(chain.pointA.x, chain.pointA.y, ball.body.position.x, ball.body.position.y);
  pop();
}

