let circleX =400;
let circleY = 300; 

let rectX = 770;

let rectW = 30;
let rectH = 50;

let SpeedX = -3;
let SpeedY = 0;


function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(50);

    rect(rectX,mouseY,rectW,rectH);

   circle(circleX, circleY, 50);

    circleX = circleX + SpeedX;
    circleY = circleY + SpeedY;
    
    
    /*if (circleY > 600){
        SpeedY = -3;
    } else if (circleX > 800){
        SpeedX = -3;
    } else if (circleY < 0){
        SpeedY = 3;
    } else if (circleX < 0){
        SpeedX = 3;
    }*/
  
    /*if(collideRect(circleX, circleY, rectX, mouseY, rectW, rectH))
  {
    SpeedY = SpeedY * -1;
    SpeedX = SpeedX * +1;
    console.log(collideRect)
    
  }*/

  if(circleX < 0 ) {
    SpeedX = SpeedX * -1;
    
  }

  if(circleX > width){
      SpeedX = SpeedX * -1;
  }

  
  //if(circleY == mouseY /*||circleY > height */) {
    //SpeedY = SpeedY * -1;
    
 // }

  /*if(collideRect(circleX, circleY, rectX, mouseY, rectW, rectH))
  {
    
    SpeedX = SpeedX * +1;
    SpeedY = SpeedY * -1;
    
  }*/
}

/*function collideRect(circleX, circleY, rectX, mouseY, rectW, rectH) {

     var colliding = false;

     if(circleX > rectX && circleX < rectX + rectW) {

         if(circleY > mouseY && circleY < mouseY + rectH) {

               return true;

         }

    }

    return false;

}*/