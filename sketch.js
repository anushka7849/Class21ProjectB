var object2,object1;
function setup() {
  createCanvas(800,400);
  gameobject2=createSprite(200, 200, 50, 80);
  gameobject1=createSprite(400,200,80,50);
  gameobject3=createSprite(300,200,50,80);
  gameobject4=createSprite(100,200,50,80);
  gameobject2.shapeColor="green";
  gameobject1.shapeColor="green";
  gameobject3.shapeColor="green";
  gameobject4.shapeColor="green";
  gameobject2.debug=true;
  gameobject1.debug=true;
  gameobject3.debug=true;
  gameobject4.debug=true;
}

function draw() {
  background(255,255,255);  
  gameobject1.x=mouseX;
  gameobject1.y=mouseY;
 if (isTouching(gameobject1,gameobject4))
  {
    gameobject4.shapeColor="red";
    gameobject1.shapeColor="red";
  }
  else {
    gameobject4.shapeColor="green";
    gameobject1.shapeColor="green";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x < object2.width/2+object1.width/2
    && object2.x - object1.x < object2.width/2+object1.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
      return true ;
    }
    else{
      return false;
    }
}