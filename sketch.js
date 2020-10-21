const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world ;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(400,380,1200,20);
  //base = new BaseClass(300,200,150,35);
  block1 = new box(330,235,30,40);
  block2 = new box(345,235,30,40);
  block3 = new box(360,235,30,40);
  block4 = new box(375,235,30,40);
  block5 = new box(350,235,30,40);
  block6 = new box(365,195,30,40);
  block7 = new box(380,195,30,40);
  block8 = new box(395,195,30,40);
  block9 = new box(380,155,30,40);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  //imageMode(CENTER);
 // image(polygon_img,polygon.position.x,polygon.position.y,40,40);
slingshot = new SlingShot(polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  

Engine.update(engine);
  
  drawSprites();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ellipseMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}