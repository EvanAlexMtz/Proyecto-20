var bg, sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadImage("gym1.png","gym1.png","gym2.png","gym2.png");
  eat = loadImage("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  bath = loadImage("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
  move = loadImage("move1.png","move1.png","move2.png","move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite (300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia arriba = Cepillarse",20, 55);
  text("Flecha hacia abajo = Ejercitarse",20, 70);
  text("Flecha hacia la izquierda = Comer",20, 85);
  text("Flecha hacia la derecha = Bañarse",20, 100);
  text("tecla m = Moverse",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}





