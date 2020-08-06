var helicopterIMG, helicopterSprite, packageSprite,packageIMG,ground;
var packageBody,ground;
var chain,bob1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,670,width,20);
	roof = new Ground(width/2,340,400,30);
	bob1 = new Bob(200,650,20);
	chain = new Chain(bob1.body,roof.body);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();
  ground.display();
  roof.display();
 bob1.display();
 chain.display();
}



