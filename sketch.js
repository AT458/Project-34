const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundImg;
var ground, hero, fly, monster;
var block;


function preload() {
  backgroundImg = loadImage("Images/GamingBackground.png");
}


function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500, 750, 3000, 50);

  hero = new Hero(1500, 400, 500);  

  fly = new Fly(hero.body, {x: 500, y: 50});

  monster = new Monster(2700, 100, 500);

  block = new Blocks(2000, 500, 100, 100);
  block2 = new Blocks(2000, 510, 100, 100);
  block3 = new Blocks(2000, 520, 100, 100);
  block4 = new Blocks(2000, 530, 100, 100);
  block5 = new Blocks(2000, 540, 100, 100);

  block6 = new Blocks(2110, 500, 100, 100);
  block7 = new Blocks(2110, 510, 100, 100);
  block8 = new Blocks(2110, 520, 100, 100);
  block9 = new Blocks(2110, 530, 100, 100);

  block10 = new Blocks(2220, 500, 100, 100);
  block11 = new Blocks(2220, 510, 100, 100);
  block12 = new Blocks(2220, 520, 100, 100);

  block13 = new Blocks(2330, 500, 100, 100);
  block14 = new Blocks(2330, 510, 100, 100);

  block15 = new Blocks(2440, 500, 100, 100);
}


function draw() {
  background(backgroundImg);

  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  monster.display();

  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

  block15.display();

  //drawSprites();
}

function mouseDragged () {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}