var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var explosion;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png");
explosion = loadSound("assets/explosion.mp3")

}
// Mark was one day going to his friend's house for a halloween party on halloween day.
// On his way there, Mark found several zombies and he tried to shoot them with his gun to protect himself.
//Mark succesfully protected himself and later enjoyed the party. YAY!
function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
//creating the zombie
zombie = createSprite(displayWidth-100,random(250,450),50,50);
zombie.addImage(zombieImg);
zombie.scale = 0.2;
zombie.velocityX = -3;

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3

   
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
  player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 

if(player.isTouching(zombie)) {
  zombie.x = displayWidth - 100;
  zombie.y = random(250,450);
  explosion.play();
}


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
 player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}



drawSprites();

}
