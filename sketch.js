const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bgImg,background;
var chef;
var burger;
var ground;
var gameState="wait";

function preload(){
  bgImg=loadImage("images/background.png");
  chefStanding= loadImage("images/chef.png")
  chefKicking= loadImage("images/chef 2.png")
  person11=loadImage("images/person1.png")
  person21=loadImage("images/person2.png")
  person31=loadImage("images/person3.png")
  person41=loadImage("images/person4.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  //console.log(windowWidth);
  //console.log(windowHeight);
  engine = Engine.create();
	world = engine.world;
 ground=Bodies.rectangle(width/2,height-10,width*10,10,{isStatic:true});
 World.add(world,ground)
  burger=new Burger(800,200,25);


  person1=new Person(2000,400,100,100);
 // image("person11",2000,400)
  person2=new Person(4000,400,100,100);
 // image("person21",4000,400)
  person3=new Person(6000,400,100,100);
//  image("person31",6000,400)
  person4=new Person(8000,400,100,100);
 // image("person41",8000,400)
  person5=new Person(10000,400,100,100);
  

	Engine.run(engine);
   
}

function draw() {
  drawSprites();
 
  Engine.update(engine);
 
  if(gameState==="wait"){
    var button =createSprite(displayWidth/2,displayHeight/2,100,100);
    text("play",500,500)
    if (mousePressedOver(button)){
      gameState = "start";
    }
  }
  
  if(gameState==="start"){
    chef = createSprite(200,250,200,200);
 chef.addImage(chefStanding);
    startGame();

  }
  if(gameState==="end"){
endGame();
  }
 
  
    
  
}

function startGame(){
  image(bgImg,-displayWidth,0,displayWidth*10,displayHeight);
 //image(chefStanding,200,250) ;
 camera.x=burger.body.position.x;
  camera.y= 400;


  fill("red");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width*50,10);

  if (keyDown("space")){
   chef.addImage(chefKicking);
    Matter.Body.setVelocity(burger.body,{x:10,y:15})
    Matter.Body.setStatic(burger.body,false);
   
  }
if (isTouching(burger,person3)){
  console.log("collided")
  Matter.Body.setStatic(burger.body,true)
  gameState="end";
}
  isTouching(burger,person1);
  isTouching(burger,person2);
 
  isTouching(burger,person4);
  isTouching(burger,person5);

  burger.display();
  person1.display();
  person2.display();
  person3.display();
  person4.display();
  person5.display();

  drawSprites();

}


function isTouching(object1,object2){
object1pos=object1.body.position;
object2pos=object2.body.position;
var distance=dist(object1pos.x,object1pos.y,object2pos.x,object2pos.y);
console.log(distance);
if (distance<=150){
 return true;
}else{
  return false;
}
}

function endGame(){
  console.log("end")
}

