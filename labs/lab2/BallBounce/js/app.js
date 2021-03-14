//set X & Y position for ball
let PosX = 0;
let PosY = 300;

//Set Velocity for ball movement
let SpeedX = 5;
let SpeedY = 5;

function setup(){
    createCanvas(800,600)
}


function draw(){
    
    background(0);
   
    //Draw ball at 5 pixel speed at x & y positions
    circle (PosX, PosY, 50)
    PosX = PosX + SpeedX;
    PosY = PosY + SpeedY;

    // if statement to make ball when hits each side of the canvas, the ball will go in the opposite direction
    if (PosY == 600){
        SpeedY = -5;
    } else if (PosX == 800){
        SpeedX = -5;
    }else if (PosY == 0){
        SpeedY = 5;
    }else if (PosX == 0){
        SpeedX = 5;
    }
  
}
