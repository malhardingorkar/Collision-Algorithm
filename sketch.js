var movingRect,fixedRect;

function setup() {
  createCanvas(1200,400);
  movingRect = createSprite(200,200,30,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

console.log(movingRect.x);
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
      fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
       {
          movingRect.shapeColor = "red";
          fixedRect.shapeColor = "red";
       } 
       else
        { movingRect.shapeColor = "green";
        fixedRect.shapeColor = "green"; }

  drawSprites();
}