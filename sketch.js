const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var GameState = 0;

function preload(){
  bgImage = loadImage("images/background.png")
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 150);
  engine = Engine.create();
  world = engine.world;
  ship = new SpaceShip(displayWidth / 2 - 500, displayHeight / 2, displayWidth / 7 - 70, displayHeight / 7);
  enemyShip1 = new AlienSpaceShip(displayWidth  - 200, displayHeight - 750, displayWidth / 4, displayHeight / 4);
  enemyShip2 = new AlienSpaceShip(displayWidth  - 200, displayHeight / 2 - 100, displayWidth / 4, displayHeight / 4);
  enemyShip3 = new AlienSpaceShip(displayWidth  - 200, displayHeight - 300, displayWidth / 4, displayHeight / 4);
  earth = new Earth(displayWidth / 2 - 700, displayHeight / 2 - 70, displayWidth / 2 - 500, displayHeight / 2 - 100);
}

function draw() {
  background(bgImage);  
  Engine.update(engine);
  ship.display();
  ship.move();
  enemyShip1.display();
  enemyShip2.display();
  enemyShip3.display();
  earth.display();
  if (GameState === 0){
    textSize(30);
    stroke("white")
    text("PRESS THE SPACE KEY TO START!!!", displayWidth / 2 - 400, displayHeight - 700);
  }
  if (keyDown(32)){
   GameState = 1;
  }
}