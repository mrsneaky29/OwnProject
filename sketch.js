var path,driver;
var car,ground

function setup(){
createCanvas(1000,750)
car=createSprite(200,350,100,170);
driver=createSprite(car.x,car.y+10,25,25);
ground=createSprite(200,380,400,20);
ground.visible=false
driver.shapeColor="green"}

function draw(){
  background("red")
  if(keyDown("W")){
    car.y=car.y-2
  }
    if(keyDown("S")){
    car.y=car.y+2
  }
    if(keyDown("A")){
    car.x=car.x-2
  }
     if(keyDown("D")){
    car.x=car.x+2
  }
  driver.y=car.y
  driver.x=car.x
  
  drawSprites();
  
}