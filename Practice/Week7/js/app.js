/*let circleX =400;
let circleY = 300; 
let circleD = 50;




let SpeedX = 3;
let SpeedY = 3;


function setup(){
    createCanvas(800, 600);

    
}
function draw(){
    background(50)

    fill("#be66d4")
    circle(circleX, circleY,circleD)
    circleX = circleX + SpeedX;
    circleY = circleY + SpeedY;

    paddle("#d4a94e",770,mouseY,30,50);
    //ball("#be66d4",400, 300, 30);

    hitWall();
    
}

function paddle(paddleColor, rectX,rectY,rectW,rectH){
    
    fill(paddleColor)
    rect(rectX,rectY,rectW,rectH);
    
}

function hitWall(){
    if (circleY > height || circleY < 0 ){
        SpeedY = SpeedY * -1;
    }

    if (circleX < 0 || circleX > width){
        SpeedX = SpeedX * -1;
    }
    
    if (collideRect(circleX, circleY, rectX, rectY, rectW, rectH))
    {
        SpeedY = SpeedY * -1;
        SpeedX = SpeedX * +1;

    }
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;
  
    if(circleX > rectX && circleX < rectX + rectW) {
  
        if(circleY > rectY && circleY < rectY + rectH) {
  
              return true;
  
        }
  
   }
  
   return false;
  
  }*/

  var paddle = {
      x: 15,
      
      w: 30, 
      h: 50,
      color: [117, 193, 199]
  }

  function setup(){
    createCanvas(800, 600);

    
}
function draw(){
    background(0)
    fill (paddle.color);
    rect(paddle.x, y = mouseY, paddle.w, paddle.h)
}