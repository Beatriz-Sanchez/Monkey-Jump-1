class Game {
  constructor(){
    this.state = "start";
  }

start(){
   
  background(bgImg);
   push();
   imageMode(CENTER);
   image(treeImg,displayWidth/2,displayHeight/2+displayHeight/10,displayWidth/2,displayHeight*2);
   pop();
   macaco.display();
   macaco.sprite.setVelocity(0,0);
   
   push();
   textSize(30)
   stroke("black")
   fill("yellow");
   text("Aperte o R para começar",windowWidth/2-140,windowHeight/2);
   pop();
   if(keyDown("R")){
     this.state = "play";
     music.loop();
   }
   
   }
play(){
   background(bgImg);
   push();
   imageMode(CENTER);
   image(treeImg,displayWidth/2,displayHeight/2+displayHeight/10,displayWidth/2,displayHeight*2);
   pop();
   
   macaco.controles();
   macaco.display();
   macaco.sprite.collide(platformSprites);//collide
   macaco.sprite.collide(platI.sprite);
   adapt();
  
   
   macaco.sprite.overlap(bananaG,function(monkey,banana){
     banana.remove();
     macaco.speedUp(10);
     setTimeout(function (){
      macaco.speedDown(10);
     },3000)
   })

   setTimeout(function (){
    platI.sprite.remove()
  },5000);

   if(eagleG[0]){
      aguia.display();
    }
    if(bananaG[0]){
      banana.display();
    }
   score = Math.round(score+frameRate()/40)

   //novo
   spawnPlatforms();
   if(platformObjects[0]){
      platform.display();
      for (let p=0; p < platformObjects.length; p++){
         if (platformObjects[p].top.isTouching(macaco.sprite)){

            setTimeout(()=>{
               platformObjects[p].velocity(0,15);
            },2500);
         }
      }
   }
   spawnEagle();
   spawnBanana();
   
   push();
   textSize(50);
   stroke("black");
   fill("white");
   text("Score: "+score,35,50);
   pop();

   if(macaco.sprite.isTouching(eagleG)|| macaco.sprite.y>displayHeight){
      hitS.play();
      this.state = "end";
      music.stop();
      setTimeout(function(){
        gameOverS.play();
      },100)
   }
   
   
  }  
  end(){
    background(bgImg);
    push();
    imageMode(CENTER);
    image(treeImg,displayWidth/2,displayHeight/2+displayHeight/10,displayWidth/2,displayHeight*2);
    pop();
    
    push()
    imageMode(CENTER)
    image(GOimg,displayWidth/2,displayHeight/2-300,0,0)
    pop()
    
    textSize(50)
    stroke("black")
    fill("yellow");
    text("Final Score: "+score,windowWidth/2-150,windowHeight/2);
  }
}


