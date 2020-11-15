var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(400,800,80,30);
  movingRect.shapeColor="blue";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(0,0,0);  
 // movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
 
}



  drawSprites();
}