
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var spawnobs,spawnban;

function preload(){
  
  
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(200,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  ground=createSprite(200,300,500,20);
  ground.visible=false;
  obstacle=createSprite(400,250,20,20);
  obstacle.addImage("obs",obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-2;
}


function draw() {
  monkey.debug=true;
  monkey.setCollider("circle",10,10);
  obstacle.debug=true;
  obstacle.setCollider("circle",20,20)
  background(255);
  createCanvas(400,400);
  if(keyDown("space")){
    monkey.velocityY=-10;
  }  
  if(monkey.isTouching(obstacle)){
    monkey.velocityX=0;
    obstacle.velocityX=0;
  }
  monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ground);
  monkey.collide(obstacle);
  spawnban();
  drawSprites();
  return obstacle;
}
function spawnban(){
  if (frameCount % 60 === 0){
  banana=createSprite(400,100,20,20);
  banana.addImage("moving",bananaImage);
  banana.scale=0.15;
  banana.velocityX=-7;
  if(monkey.isTouching(obstacle)){
  banana.velocityX=0;
  return banana;
   }
  }
}
   






