var macaco;
var aguia;
var banana, bananaG;
var eagleG;
var game;
var score = 0;
var PlatV = 8
var W1 = 10;
var W2 = -10;
var B = 9;


var jumpS, gameOverS, itemS, music, hitS;

var bgImg, GOimg
var platform, platformM, platformS;
var banana;
var treeImg;
var platformSprites,tops,bottoms;
var platformObjects = [];


function preload(){
   
   bgImg = loadImage("OtherSprites/BgImg.png")
   treeImg = loadImage("OtherSprites/TreeImg.png")
   GOimg = loadImage("OtherSprites/GO.png")
   

   jumpS = loadSound("./Sounds/Jump.mp3");
   hitS = loadSound("./Sounds/Hit.mp3");
   gameOverS = loadSound("./Sounds/Game_Over.mp3");
   itemS = loadSound("./Sounds/Item.mp3");
   music = loadSound("./Sounds/Music.mp3");
   
}
function setup(){
   createCanvas(windowWidth,windowHeight)
   macaco = new Macaco();
   platformSprites = new Group();
   tops = new Group();
   bottoms = new Group();
   eagleG = new Group();
   bananaG = new Group();
   game = new Game();
   platI = new Plataforma();
   platI.sprite.y = macaco.sprite.y+300;
   platI.sprite.x = macaco.sprite.x;
   tops.add(platI.top);
}
function draw(){
   
   if(game.state === "start"){
      game.start();
   }
   
   if (game.state === "play"){
      game.play();
   }
   
   if (game.state === "end"){
      game.end();
   }

  
}

function spawnPlatforms(){
   if (frameCount%55 === 0){
      platform = new Plataforma();
      platform.velocity(0,PlatV);
      platform.setLifetime(displayHeight/2+30);
      platform.addToGroups();
      platformObjects.push(platform);
   }
}
function spawnEagle(){
   
   if(frameCount%100 === 0){
      aguia = new Eagle();
      aguia.sprite.lifetime = displayWidth/10+30;
      eagleG.add(aguia.sprite);
   }
}
function spawnBanana(){
   if (frameCount%200 === 0){
      banana = new Banana();
      banana.sprite.lifetime = displayWidth/10+30;
      bananaG.add(banana.sprite);
   }
}
function adapt(){
 if(score!=0){
    PlatV += 1/200;
    W1 += 2/200;
    W2 -= 2/200;
    B += 2/200;
 }
}

