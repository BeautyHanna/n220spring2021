/*let circleX = 250;
let circleY = 0;
let xSpeed = 3;
let ySpeed = 3;
let rectX = 0;
let rectY= 450;
let rectW = 500;
let rectH = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  background(255);

  
  circle(circleX, circleY, 50);
  fill(255,0,0)

  
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  
  if(circleX < 0 || circleX > width-25 || circleX < 25) {
    xSpeed = xSpeed * -1;
  }

  
  if(circleY < 0 ||circleY > height ) {
    ySpeed = ySpeed * -1;
  }

  if(collideRect(circleX, circleY+25, rectX, rectY, rectW, rectH))
  {
    ySpeed = ySpeed * -1;
    xSpeed = xSpeed * +1;
    console.log(collideRect)
    
  }
  rect(rectX,rectY,rectW,rectH);
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


let circleX = 250;
let circleY = 0;
let xSpeed = 3;
let ySpeed = 3;
let rectX = 0;
let rectY= 450;
let rectW = 500;
let rectH = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  background(255);

  
  circle(circleX, circleY, 50);
  fill(255,0,0)

  
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  
  rect(rectX,rectY,rectW,rectH);
  collideWall();
  
}


function collideWall(){
  
  if(circleX < 0 || circleX > width-25 || circleX < 25) {
    xSpeed = xSpeed * -1;
    console.log(collideWall)
  }

  
  if(circleY < 0 ||circleY > height ) {
    ySpeed = ySpeed * -1;
    console.log(collideWall)
  }

  if(collideRect(circleX, circleY+25, rectX, rectY, rectW, rectH))
  {
    ySpeed = ySpeed * -1;
    xSpeed = xSpeed * +1;
    console.log(collideRect)
    
  }
}
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

  var colliding = false;

  if(circleX > rectX && circleX < rectX + rectW) {

      if(circleY > rectY && circleY < rectY + rectH) {

            return true;

      }

 }
//if you have any questions about the code feel free to type
//basically, what you did was move those code into a new function in the collideWall function right? 
//correct its so that the code looks nicer and easier to read 
//also it is easier to do console.logs on them like i just did so you can tell when the ball is hitting the wall and when its hitting the rectangle
//i understand all of it
//sweet idk when were supposed to go back so imma just chill till were pulled back
//lol okay

 return false;

}