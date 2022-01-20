class Banana{
  constructor(){
    this.sprite = createSprite(displayWidth/2+random(-300,300),displayHeight/2-600,0,0)
    this.animation = loadAnimation("OtherSprites/BananaImg.png","OtherSprites/BananaImg2.png","OtherSprites/BananaImg3.png","OtherSprites/BananaImg4.png");

    this.sprite.addAnimation("caindo",this.animation);
    this.sprite.scale = 0.3;
    this.sprite.debug = false;
    this.sprite.setCollider("circle",0,0,105);
    this.sprite.setVelocity(0,B);
    
    
    
    if(platform){
     this.sprite.depth = platform.sprite.depth+2
    }
    
  }
display(){

  drawSprites();
  } 
}