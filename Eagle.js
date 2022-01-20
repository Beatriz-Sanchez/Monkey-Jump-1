class Eagle{
  constructor(){
    var rand = Math.round(random(displayHeight/10,displayHeight/2))
    
    this.sprite = createSprite(displayWidth/2,rand,0,0)
    this.fly = loadAnimation("EagleSprites/Eagle1.png","EagleSprites/Eagle2.png","EagleSprites/Eagle3.png")
    
    this.sprite.addAnimation("Voando",this.fly);
    this.sprite.scale = 0.8
    this.sprite.debug = false;
    this.sprite.setCollider("circle",0,0,67);


    
    var n = Math.round(random(1,2));
    switch(n){
      case 1:
        this.sprite.x = -40;
        this.sprite.velocityX = W1;
        this.sprite.mirrorX(-1);
          break;
      case 2:
        this.sprite.x = displayWidth+40;
        this.sprite.velocityX = W2;

        
        
    }
    
  }

display(){
  drawSprites();
  
  } 
}
