var ground, groundImg;
var player, playerImg;

function preload(){
  playerImg = loadAnimation("p1.png","p2.png","p3.png","p4.png","p5.png","p6.png","p7.png","p8.png");
  
  backgroundImg = loadImage("Ground.jpg");
}

function setup(){
  createCanvas(600,250);
  
  player = createSprite(70,170,50,50);
  player.addAnimation("running",playerImg);
  player.scale = 1.1;
}

function draw(){
  background(backgroundImg);
  
  drawSprites();
}