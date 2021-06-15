const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine;
var ground;

function setup() {
  var canvas = createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;
  this.slingShot = new Slingshot(150,300);
  this.ground1 = new Ground(400,400,250,10);
  this.ground2 = new Ground(800,200,250,10);
  this.box0 = new Box(330,375,40,40,"whitesmoke")
  this.box1 = new Box(370,375,40,40,"blue")
  this.box2 = new Box(410,375,40,40,"purple")
  this.box3 = new Box(450,375,40,40,"red")
  this.box4 = new Box(490,375,40,40,"yellow")

  this.box5 = new Box(370,335,40,40,"orange")
  this.box6 = new Box(410,335,40,40,"pink")
  this.box7 = new Box(450,335,40,40,"cyan")

  this.box8 = new Box(410,295,40,40,"lime")

  this.box9 = new Box(720,175,40,40, "yellow");
  this.box10 = new Box(760,175,40,40, "lime");
  this.box11 = new Box(800,175,40,40, "purple");
  this.box12 = new Box(840,175,40,40, "blue");
  this.box13 = new Box(880,175,40,40, "cyan");

  this.box14 = new Box(760,135,40,40, "red");
  this.box15 = new Box(800,135,40,40, "whitesmoke");
  this.box16 = new Box(840,135,40,40, "pink");
  
  this.box17 = new Box(800,95,40,40,"orange");

  

}

function draw() {
    background(1, 1, 1);
    drawSprites();
    this.slingShot.display();
    this.ground1.display();
    this.ground2.display();
    this.box0.display();
    this.box1.display();
    this.box2.display();
    this.box3.display();
    this.box4.display();
    this.box5.display();
    this.box6.display();
    this.box7.display();
    this.box8.display();
    this.box9.display();
    this.box10.display();
    this.box11.display();
    this.box12.display();
    this.box13.display();
    this.box14.display();
    this.box15.display();
    this.box16.display();
    this.box17.display();
}