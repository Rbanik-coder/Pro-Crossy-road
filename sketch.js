var grid = 50;
var width = 1366;
var car,log;
var carGroup,logGroup;
var grassHeight = 60;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var player;
var a,a1;
var b,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13;
function preload()
{
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  carGroup = new Group();
  logGroup = new Group();

  var grass = createSprite(750,260,width,grassHeight);
  grass.shapeColor='lime';

  for(var i=0;i<6;i++)
  {

  if(i%2===0)
   {
    var road = createSprite(750,height-150-(i*400)-grassHeight,width,510);
    road.shapeColor="black";
   }
}

  for(var i=0;i<130;i++)
  {
    car = new Car(2);
    carGroup.add(car.spt);
  }

  for(var i=0;i<60;i++)
  {
    log = new Log(-4);
    logGroup.add(log.spt);
  }

  var grass = createSprite(750,725,width,grassHeight);
  grass.shapeColor='lime';

  a = createSprite(750,height-270,width,40);
  a.shapeColor="black";

  b = createSprite(30,height-270,20,40);
  b.shapeColor="white";
  b1 = createSprite(70,height-270,20,40);
  b1.shapeColor="white";
  b2 = createSprite(110,height-270,20,40);
  b2.shapeColor="white";
  b3 = createSprite(150,height-270,20,40);
  b3.shapeColor="white";
  b4 = createSprite(190,height-270,20,40);
  b4.shapeColor="white";
  b5 = createSprite(230,height-270,20,40);
  b5.shapeColor="white";
  b6 = createSprite(270,height-270,20,40);
  b6.shapeColor="white";
  b7 = createSprite(310,height-270,20,40);
  b7.shapeColor="white";
  b8 = createSprite(350,height-270,20,40);
  b8.shapeColor="white";
  b9 = createSprite(390,height-270,20,40);
  b9.shapeColor="white";
  b10 = createSprite(430,height-270,20,40);
  b10.shapeColor="white";
  b11 = createSprite(470,height-270,20,40);
  b11.shapeColor="white";
  b12 = createSprite(510,height-270,20,40);
  b12.shapeColor="white";
  b13 = createSprite(550,height-270,20,40);
  b13.shapeColor="white";
  b14 = createSprite(590,height-270,20,40);
  b14.shapeColor="white";
  b15 = createSprite(630,height-270,20,40);
  b15.shapeColor="white";
  b16 = createSprite(670,height-270,20,40);
  b16.shapeColor="white";
  b17 = createSprite(710,height-270,20,40);
  b17.shapeColor="white";
  b18 = createSprite(750,height-270,20,40);
  b18.shapeColor="white";
  b19 = createSprite(790,height-270,20,40);
  b19.shapeColor="white";
  b20 = createSprite(830,height-270,20,40);
  b20.shapeColor="white";
  b21 = createSprite(870,height-270,20,40);
  b21.shapeColor="white";
  b22 = createSprite(910,height-270,20,40);
  b22.shapeColor="white";
  b23 = createSprite(950,height-270,20,40);
  b23.shapeColor="white";
  b24 = createSprite(990,height-270,20,40);
  b24.shapeColor="white";
  b25 = createSprite(1030,height-270,20,40);
  b25.shapeColor="white";
  b26 = createSprite(1070,height-270,20,40);
  b26.shapeColor="white";
  b27 = createSprite(1110,height-270,20,40);
  b27.shapeColor="white";
  b28 = createSprite(1150,height-270,20,40);
  b28.shapeColor="white";
  b29 = createSprite(1190,height-270,20,40);
  b29.shapeColor="white";
  b30 = createSprite(1230,height-270,20,40);
  b30.shapeColor="white";
  b31 = createSprite(1270,height-270,20,40);
  b31.shapeColor="white";
  b32 = createSprite(1310,height-270,20,40);
  b32.shapeColor="white";
  b33 = createSprite(1350,height-270,20,40);
  b33.shapeColor="white";
  b34 = createSprite(1390,height-270,20,40);
  b34.shapeColor="white";
  b35 = createSprite(1430,height-270,20,40);
  b35.shapeColor="white";
  b36 = createSprite(1470,height-270,20,40);
  b36.shapeColor="white";
  b37 = createSprite(1510,height-270,20,40);
  b37.shapeColor="white";

  player = new Player(50,height-430);

 }

function draw() {
  background("darkblue");

  //translate(0,-player.spt.y+height-150)

  if(keyDown(UP_ARROW)){
    player.move(0,-3);
  }
  else if(keyDown(DOWN_ARROW)){
    player.move(0,3);
  }
  else if(keyDown(LEFT_ARROW)){
    player.move(-3,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    player.move(3,0);
  }
 

  for(i=1;i<logGroup.length;i++){
    if(logGroup[i].x<0){
      logGroup[i].x=width;
    }
  }

  for(i=1;i<carGroup.length;i++){
    if(carGroup[i].x<0){
      carGroup[i].x=width;
    }

    else if(carGroup[i].x>width){
        carGroup[i].x=0;
    }
  }
 

  drawSprites();
}

