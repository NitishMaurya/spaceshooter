const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var rocket;
var monster;
var bullet;
var bx;
var score =0;
function preload() {
  bg=loadImage("images/bg2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    rocket = new Rocket(600,250,400,500)
    monster = new Monster(600,1000,300,180);
    bullet = new Bullets(600,350,50)
    
}

function draw(){
    background(bg);
    textSize(30);
    fill("white");
    text("MY_SCORE:"+ score, 100,100);
    Engine.update(engine);
    rocket.display();
    monster.display();
    bullet.display();
    bullet.visible=false
    monster.score();
    /*
    if(detectCollision(monster,bullet)){
      monster.kaboom();
      tint(255,255);
      image(exp,400, 400, 300, 200);
    }
    */ 
   if(detectCollision(monster,bullet)){
    bx = true;
    /*score = score +1
    if(monster.body.Visibility===0){
       score = score +1;
    }
    */
  }

}

function mouseDragged(){
    Matter.Body.setPosition(rocket.body, {x: mouseX , y: 250});
    bullet.body.position.x = rocket.body.position.x;
}

function keyPressed(){
    if(keyCode===32){
      bullet.visible=true
        Matter.Body.setStatic(bullet.body, false)
      
    }
}

function detectCollision(monsterx,bulletx){
 monpos = monsterx.body.position;
 bulpos = bulletx.body.position;
  
  var distance=dist(monpos.x, monpos.y, bulpos.x, bulpos.y)
  	if(distance<=monsterx.height/2+bulletx.r)
    {
      //console.log("detected");
      return true;
  	 // Matter.Body.setStatic(bullet.body,false);
    }

  }
