class Plataforma {
 constructor(){
    this.sprite = createSprite(displayWidth/2+ random(-300,300),-200,0,0);//novo 
    this.top = createSprite(this.sprite.x,this.sprite.y-40,0,10);//novo
    this.bottom = createSprite(this.sprite.x,this.sprite.y+35,0,10);//novo

    this.top.visible = false;
    this.bottom.visible = false;
    this.sprite.depth = 1;
    //this.sprite.debug= true;
    //this.top.debug = true;
    //this.bottom.debug = true;
    
    this.imageB = loadImage("OtherSprites/PlatformB.png");
    this.imageM = loadImage("OtherSprites/PlatformM.png");
    this.imageS = loadImage("OtherSprites/PlatformS.png");

    var rand = Math.round(random(1,3));
    switch (rand) {
      case 1: 
        this.sprite.addImage(this.imageB);
        this.top.width = 350;
        this.bottom.width = 330;
        this.sprite.setCollider("rectangle",0,0,850,170);
        break;
      case 2: 
        this.sprite.addImage(this.imageM);
        this.top.width = 175;
        this.bottom.width = 150;
        this.sprite.setCollider("rectangle",0,0,430,170);
        break;
      case 3: 
        this.sprite.addImage(this.imageS);
        this.top.width = 50;
        this.bottom.width = 50;
        this.top.y = this.sprite.y-30;
        this.sprite.setCollider("rectangle",0,10,160,135);
        break;
      default:
        break;
    }
    
    this.sprite.scale = 0.4;//novo nome

    
    
  } 
  display(){



    drawSprites();
  }
  velocity(x,y){
    this.sprite.setVelocity(x,y);
    this.top.setVelocity(x,y);
    this.bottom.setVelocity(x,y);
  }
  addToGroups(){
    platformSprites.add(this.sprite);
    tops.add(this.top);
    bottoms.add(this.bottom);
  }
  setLifetime(n){
    this.sprite.lifetime = n;
    this.top.lifetime = n;
    this.bottom.lifetime = n;
  }

}