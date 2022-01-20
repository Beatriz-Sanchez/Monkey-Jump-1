class Macaco{
   constructor(){
      this.sprite = createSprite(displayWidth/2,displayHeight/2-200);
      this.jump = loadAnimation("MonkeyJump/MonkeyJump1.png","MonkeyJump/MonkeyJump2.png","MonkeyJump/MonkeyJump3.png", "MonkeyJump/MonkeyJump4.png")
      this.run = loadAnimation("MonkeyRun/MonkeyRun1.png","MonkeyRun/MonkeyRun2.png","MonkeyRun/MonkeyRun3.png","MonkeyRun/MonkeyRun4.png","MonkeyRun/MonkeyRun5.png")
      this.still = loadAnimation("MonkeyRun/MonkeyRun5.png");
      this.velocity = 11;

      this.sprite.addAnimation("Parado",this.still);
      this.sprite.addAnimation("Correndo",this.run)
      this.sprite.addAnimation("Pulando",this.jump)
      this.sprite.scale = 3.5;

      //this.sprite.debug = true;
      this.sprite.setCollider("rectangle",1,0,15,25);//novo
    }
    right(){
      this.sprite.x+=this.velocity
      this.sprite.changeAnimation("Correndo",this.run);
      this.sprite.mirrorX(1);
    }
    left(){
      this.sprite.x-=this.velocity
      this.sprite.changeAnimation("Correndo",this.run);
      this.sprite.mirrorX(-1);

    }
    up(){
     this.sprite.velocityY =-30;
     this.sprite.changeAnimation("Pulando",this.jump);

    }
    controles(){
      if(keyDown("RIGHT_ARROW")){
        this.right(); 
      }else if(keyDown("LEFT_ARROW")){
        this.left();
        
      }else{
        macaco.sprite.changeAnimation("Parado",this.still);
      }
      if(keyDown("UP_ARROW")&& this.sprite.isTouching(tops)|| keyDown("UP_ARROW")&& this.sprite.collide(platI.sprite)){
          this.up();
          jumpS.play();
        if(keyDown("LEFT_ARROW")){
          this.sprite.mirrorX(-1);
        }
        if(keyDown("RIGHT_ARROW")){
          this.sprite.mirrorX(1);
        }
      }
    }
    display(){
      this.sprite.velocityY += 1.2;
    drawSprites();
    }
 speedUp(N){
   this.velocity+=N;
   itemS.play();
 }
 speedDown(N){
   this.velocity-=N;
 }

}