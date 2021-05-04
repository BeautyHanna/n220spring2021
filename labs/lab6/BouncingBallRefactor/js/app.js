//set X & Y position for ball
let myBall = {
    X: 0,
    Y: 300,
    R: 50,
    SY: 5,
    SX: 5,
    C: "#2fc7cc"
}

function setup(){
    createCanvas(800,600)
}


function draw(){
    
    background(0);
   
    //Draw ball at 5 pixel speed at x & y positions
    fill(myBall.C)
    circle (myBall.X, myBall.Y, myBall.R)
    myBall.X = myBall.X + myBall.SX;
    myBall.Y = myBall.Y + myBall.SY;

    // if statement to make ball when hits each side of the canvas, the ball will go in the opposite direction
    if (myBall.Y == 600){
        myBall.SY = -5;
    } else if (myBall.X == 800){
        myBall.SX = -5;
    }else if (myBall.Y == 0){
        myBall.SY = 5;
    }else if (myBall.X == 0){
        myBall.SX = 5;
    }
}
