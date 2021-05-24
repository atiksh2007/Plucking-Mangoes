const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, thread;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var b


function preload(){
	boy=loadImage("images/boy.png");
b=loadImage("images/bg.png")
  }

function setup() {
createCanvas(1370, 610);
engine = Engine.create();
world = engine.world;

stoneObj=new stone(235,420,30); 

mango1=new mango(1170,130,40);
mango2=new mango(1100,100,30);
mango3=new mango(1140,150,37);
mango4=new mango(1000,70,25);
mango5=new mango(1100,70,30);
mango6=new mango(1000,230,32);
mango7=new mango(900,230,25);
mango8=new mango(900,160,40);
mango9=new mango(1010,140,43);
mango10=new mango(1200,200,24);
mango11=new mango(1100,250,44);
mango12=new mango(1120,50,35);





treeObj=new tree(1050,600);
groundObject=new ground(width/2,600,width,20);
thread=new Lauch(stoneObj.body,{x:240,y:460})  



Engine.run(engine);
 
}

function draw() {

  background(b);


  fill("brown")
  textSize(30);
  text("Press Space To Get A New Stone To Throw!",50 ,200);

  image(boy,200,380,200,300);
  
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();


  
  stoneObj.display();

  groundObject.display();
  thread.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);

if(mouseDragged){
  stoneObj.x=mouseX;
  stoneObj.y=mouseY
}
else {
stoneObj.x=240
stoneObj.y=460
}

  

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	thread.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  thread.attach(stoneObj.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
   Matter.Body.setStatic(lmango.body , false);
   stoneObj.visible = false;
 } 
}

