
let textLol = ' ';
let button1;
let button2
let next;
let doable = false;
let screen = 1;
var b;
var pipes = [];
let highscore = 0;
let gamestate = true;
let scorearray = [];
let bruh = false;
let c = 0;
let bug = true;
let algeaArray = [];
let score = 0;
const particles = [];
let particleOn = false;
let algaeOn = true;
let pipesOn = true;
let sharks 
let shiftOn =true;
let  shark2 = [];
let L = true;

//
//
//
//
//
//
//
//
function setup() {
  
  createCanvas(windowWidth-20,windowHeight-20);
  b = new bird();
  p= new pipe();
  a = new algea();
  b2 = new birdtwo();
  
  
}
function preload(){
  sharkpic = loadImage('pics/shark.png');
  algae = loadImage('pics/algae.png');
  minefield = loadImage('pics/mine.png');
  cobblestone = loadImage('pics/cobblereal.png');
  cobbledown = loadImage('pics/L.jpg');
  br = loadImage('pics/backround.jpg');
  br2 = loadImage('pics/backround2.jpg');
  shark2 = loadImage('pics/shark2.png');
  br22 = loadImage('pics/back22.jpg');
  wood = loadImage('pics/bridge.jpg');
                  
  
}


function draw() {  
  background(255);
   
  
  
  if(score >  20){
      pipes.length = 0;
      algaeOn = false;
      algeaArray.length = 0;
      
      screen = 5;
     
      
    }
  
  
  
    if (screen == 5){
      clear();
      background(br22)
      b2.show();
      b2.update();
      b2.crossed();
      
      
      
      }
      
      
    
  
  
  if (screen == 3){
    clear();
    fill(1)
    text("Oh no!",20,50)
    
    
    text("KM: "+score,20,80)
    fill(1)
    
    text("Press CTRL + R to restart",20,110);
    gamestate = false;
    
  }
  if(screen == 15){
    clear();
     background(wood);
    textSize(20);
    fill(255,255,255)
    text("You: Well because of shark finning  first we will become exctnint but you dont care,",20,200);
    text(" and because of us disaapering: fish are over populating, algea is increased",20,230);
    text("because normally we would eat it and the soup that you make from us is poisanaus ",20,260);
    text("aswell as your beliefs that it cures any ilness which is false!!",20,280);
    shiftOn = false;
     
     
  }
  if(screen == 1){
    
    textSize(30);
    textStyle(ITALIC);
    fill(64,49,180)
    text("Save Shark's",width/2,50);
    fill(1);
    textSize(15)
     text(textLol,20,20,350);
    textStyle(BOLD);
    textSize(23)
    fill(1)
    text("Goal of the game:",20,270);
    textSize(30);
    fill(255,255,0)
    text("Under Development",20,420);
    fill(1)
    textSize(16)
    textStyle(NORMAL);
    text("You are a shark, and you have to wonder to the surface to warn people",20,300);
    text("to stop killing all of the sharks and explain that they need us to",20,320);
    text(" survive and should stop killing us for soup but to travel to Hong Kong, ",17,340);
    text("You must avoid the underwater landminds and other things for the next 20KM.",20,360)
    
    textSize(15);
    textStyle(NORMAL);
    fill(1)
    textStyle(ITALIC);
  button1 = createButton('Play');
    
  button1.position(width/2, 90);
  button1.mousePressed(changeBG);
  button1.size(200,70);
   button1.style("font-family", "Times");
  button1.style("background-color", "#003648");
	button1.style("color", "#00b5e9");  
    button2 = createButton('Find Out More!');
    button2.position(width/2,170)
    button2.mousePressed(find);
    
    
    
    
    textStyle(NORMAL)
    
    
    
    
    
    
  }
  if(screen == 17){
    text(x,20,20)
  }
  if (screen == 10){
    clear();
    background(wood)
    textSize(15)
      text("A man aproches you.'Ooh!, a healthy sharks fin, He'll make me lots of money!'",20,50);
    fill(255,255,255);
    text("Press shift to continue",480,440)
    shiftOn = true;
  }
  
  if(screen == 2){
    clear();
  background(br);
  textSize(20)
    
  b.update();
  b.show();

  a.show();
  a.update();
  fill(1);
    if (particleOn == true){
    for (let i = 0; i < 2; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
    }
    
    
  text("KM: "+ highscore,20,30)
  for (var i = 0;i < pipes.length;i++){
    pipes[i].show();
    pipes[i].update();
    pipes[i].hit();
  }
    for(var j = 0;j < algeaArray.length;j++){
      algeaArray[j].show();
      algeaArray[j].update();
      algeaArray[j].hit();
    }
      
    
    if (frameCount % 150 == 0){
      if(gamestate == true){
        if(pipesOn == true){
    pipes.push(new pipe());
    
      
      }
      }
      
  }
  
  if (frameCount % 250 == 0){
    if(gamestate == true){
      score++;
      
      if (algaeOn == true){
      
      algeaArray.push(new algea());
      }
      
      
  }  
  }
}
 
}
//
//
//
function bird(){
  this.x = 150;
  this.y = 200;
  this.fly = 5;
  
  this.gravity = 0.1      ;
  this.vellocity = 0;
  //
  
  this.up = function(){
   this.vellocity -=  this.fly;
  }
  this.show = function(){
    fill(119,136,153);
    image(sharkpic,this.x,this.y,50,50);
    
  }
  this.update = function(){
    this.vellocity += this.gravity;
    this.y += this.vellocity;
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 60;
      
    }   
 
    if (this.y > windowHeight-20){
      this.y = windowHeight-20;
      this.vellocity = 0;
      screen = 3;

    
  }
}
}


function pipe(){
  this.top = random(height/2.3);
  this.bottom = random(height/2.3);
  this.x = width/1;
  this.speed = 1;
  this.highlight = false;
  //
  this.show = function(){
    fill(10,2,10);
    if (this.highlight){
      fill(255,30,120)
  }
    
    image(cobblestone,this.x,0,50,this.top)
    image(cobbledown,this.x,height-this.bottom,18,this.bottom);
    
    
    
    
    
    
    
  }
  this.update = function(){
    this.x -= this.speed;
    
  }
  this.hit = function(){
   if (b.y < this.top|| b.y > height - this.bottom) {
     if (b.x+50 > this.x && b.x < this.x + 50){
       console.log("GAME OVER")
       this.highlight = true;
       gamestate = false;
       particleOn = true;
       
       
       
       
     }
     
   
  }
}
}
function keyPressed(){
  if(gamestate == true){
  if (keyCode == ENTER){
    screen = 2;
    doable = true;
    
    
  }
    if (shiftOn == true){
     if (keyCode == SHIFT){
      
        screen = 15;
        

    } 
    }
    
  if (key == ' '){
    if (doable == true){
      b.up();
    }
 }
    
}
}
function algea(){
  this.x = 500;
  this.y = random(50,450);
  this.show = function(){
    image(algae,this.x,this.y,50,50)
    
  }
  this.update = function(){
    this.x -= 1;
  }
  this.hit = function(){
   if(b.x > this.x && b.x<this.x+50&& b.y>this.y&&b.y<this.y+50){
   console.log("ate algea")
     for(var j = 0;j < algeaArray.length;j++){
      algeaArray.splice(j,1);
       console.log("j")
    }
     
     
   }
  }
  
}
class Particle {

  constructor() {
    this.x = b.x+20;
    this.y = b.y+30;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(255,0,0, this.alpha);
    ellipse(this.x, this.y, 16);
  }

}
function changeBG(){
   if(gamestate == true){
     screen = 2;
    doable = true;
     button1.position(30, 120);
     removeElements();
   }
}


function birdtwo(){
  this.x = 50;
  this.y = 350;
  this.show = function(){
    image(shark2,this.x,this.y,80,80);
 }
  this.update = function(){
    this.x += 3;
    
  }
  this.crossed = function(){
    if (this.x >= 450){
      screen = 10;
      shiftOn = true;
      
      
    }
    
    
  }
}
function clicky(){
  
  screen = 15;
  
  
 
}
function find(){
   textLol = "Finning sharks for there fins has been nothing new, Infact it has been going on since 950's when emperor Taizu popularized it, Now a days shark fin soup which is made from using shark fins as its key ingriedient is sold in 97 percent of the seafood restaurants in Hong Kong and due to this high demand around 100m sharks are killes yearly. Not only does this affect the marine life since it is on top of the food chain, it also affects us like that sharks protect a vital organism which gives us oxygeon or that without sharks no speaices would clean up algae which will fill our oceons."
}
