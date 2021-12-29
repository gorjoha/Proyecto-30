const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  polygon=new polygonClass(50,200,20);
  //slingShot=new SlingShot(polygon,{x:100,y:200})
  slingShot=new SlingShot(polygon.body,{x:100,y:200});

  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);
  //Construccion derecha
  rectangulo1=new Block(640,160,30,40);
  rectangulo2=new Block(670,160,30,40);
  rectangulo3=new Block(700,160,30,40);
  rectangulo4=new Block(730,160,30,40);
  rectangulo5=new Block(760,160,30,40);
  //piramide 2 Segundo nivel
  rectangulo6=new Block(670,120,30,40);//100 Original Y
  rectangulo7=new Block(700,120,30,40);
  rectangulo8=new Block(730,120,30,40);
  //piramide 2 Tercer nivel
  rectangulo9=new Block(700,90,30,40);

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Jala la piedra hexagonal y sueltala, para lanzarla contra los bloques",130,50);
  textSize(15);
  fill("lightyellow");
  text("Presiona espacio para poder lanzar de nuevo",200,350)
  

  ground.display();
  stand1.display();
  stand2.display();
  polygon.display();
  slingShot.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //piramide derecha Primer nivel
  rectangulo1.display();
  rectangulo2.display();
  rectangulo3.display();
  rectangulo4.display();
  rectangulo5.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //piramide derecha Ultimo nivel
  rectangulo9.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  //piramide derecha Segundo nivel
  rectangulo6.display();
  rectangulo7.display();
  rectangulo8.display();
  fill("grey");
  block16.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:200})
    slingShot.attach(polygon.body);
  }
}