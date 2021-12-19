var backgroundImg
var snow, snowImg
function preload(){
  backgroundImg = loadImage("snow3.jpg")
snowImg = loadAnimation("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg); 
  if(frameCount%50===0){
    snow= createSprite(20,20)
    snow.x = Math.round(random(10,790))
    snow.addAnimation("snow", snowImg)
    snow.velocityY = 3
    snow.scale = 0.1
  } 
  drawSprites();
}