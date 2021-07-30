var bg,bgImg,sleep,brush,gym,eat,drink,move,bath;
var astronaut;

function preload(){
bgImg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
brush=loadAnimation("brush.png");
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat=loadAnimation("eat1.png","eat2.png");
drink=loadAnimation("drink1.png","drink2.png");
move=loadAnimation("move.png","move1.png")
bath=loadAnimation("bath1.png","bath2.png")
}
function setup() {
  createCanvas(800,400);
 

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

  bg=createSprite(800,400);
  bg.addImage(bgImg);

 createEdgeSprites(edges);
}

function draw() {
  background(255,255,255);  
  
  drawSprites();  

  astronaut.bounceOff(edges);
  

 text("INSTRUCTIONS:-",70,70);
 text("UP_ARROW=BRUSHING",70,80)
 text("DOWN_ARROW=GYMMING",70,90)
 text("RIGHT_ARROW=BATHING",70,100)
 text("LEFT_ARROW=EATING",70,110)
 text("M KEY=MOVING",70,120);
 text("D KEY=DRINKING",70,130);

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming")
  astronaut.y=350;
  astronaut.x=400;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

    if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing")
    astronaut.y=330;
    astronaut.x=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
  
      if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating")
      astronaut.y=330;
      astronaut.x=380;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }

      if(keyDown(M_KEY)){
        astronaut.addAnimation("moving",move);
        astronaut.changeAnimation("moving")
        
        astronaut.velocityX=3;
       }

         if(keyDown(D_KEY)){
          astronaut.addAnimation("drinking",drink);
          astronaut.changeAnimation("drinking")
          astronaut.y=330;
          astronaut.x=400;
         
          }
      
     
                 
} 