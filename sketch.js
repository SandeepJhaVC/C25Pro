
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1, b2;

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();
	ground = new Ground();
	block1 = new Base(1500, 405, 10, 150);
	block2 = new Base(1200, 405, 10, 150);
	block3 = new Bin();


	//Engine.run(engine);

}


function draw() {
	background("grey");
	Engine.update(engine)
	ground.display();

	paper.display();
	block1.display();
	block2.display();
	block3.display();
	

	//keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:220,y:-75})
	}
}