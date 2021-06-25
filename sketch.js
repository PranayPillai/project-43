var bg,bg2,form,system,code,security;
var treasure
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  treasure = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1500,600);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  background.addImage(treasure);
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  if(actualCode === enteredCode.toUpperCase){
    score = score + 1;
  }

  drawSprites()
}