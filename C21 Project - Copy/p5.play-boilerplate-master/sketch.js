var bullet , wall;
var speed , weight;
var thickness;
var damage;
var invisibleWall;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(40,200,100,20);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = "black";

  speed = Math.round(random(223,321));
  weight = Math.round(random(30, 52));
  thickness = Math.round(random(22,83));

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);

  hasCollided(bullet , wall);
  drawSprites();
}

function hasCollided(object1, object2) {
  if (object2.x - object1.x <= object1.width/2 + object2.width/2) {
    
   object1.velocityX = 0;

   damage = (0.5*weight*speed*speed) / (thickness*thickness*thickness);
    
   if (damage <= 10) {
     wall.shapeColor = "green";
   } else {
     wall.shapeColor = "red";
   }
  }
}