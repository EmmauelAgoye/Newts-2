
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world();

	let Canvasmouse = Mouse.create(canvas.elt);
	Canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse:canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	pendulum1 = new Pendulum(300,480,25);
	pendulum2 = new Pendulum(350,480,25);
	pendulum3 = new Pendulum(400,480,25);
	pendulum4 = new Pendulum(450,480,25);
	pendulum5 = new Pendulum(500,480,25);
	sling1 = new Sling(pendulum1.body,roof.body,-100,0);
	sling2 = new Sling(pendulum2.body,roof.body,-50,0);
	sling3 = new Sling(pendulum3.body,roof.body,0,0);
	sling4 = new Sling(pendulum4.body,roof.body,50,0);
	sling5 = new Sling(pendulum5.body,roof.body,100,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  
  drawSprites();
 
}
function mouseDragged(){
	Matter.body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}




