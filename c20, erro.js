//engine, e o motor da fisica, e o que faz as coisas acontecer.
//bodies, sao os objetos, os personagens.
//const, e a nova "var".

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var pedra;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var pedra_options = {
    restitution: 0.50,
    isStatic: true 
  };
  
  //propiedade 
  var ball_options = {
   //o quanto uma coisa pula
    restitution: 0.95,
    //velocidade
    frictionAir:0.01
  }
   
   var ground_options ={
   
  //algo que e estatico
    isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  pedra = Bodies.rectangle (200,290,400,20, pedra_options);
  World.add(world,pedra);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(pedra.position.x,pedra_options.y,300,20); 


  
  
}

