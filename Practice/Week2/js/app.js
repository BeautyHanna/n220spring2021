/* let spices = 0;

function draw(){ 

    //make it go backwards, put a negative number
    //to make it count slower, use decimals ex: .1 / .0001
    //to make it go faster, put larger numbers ex: 10 / 100 / 10000
    spices = spices + 1000;
    console.log(spices);
} */

//set starting positions of circle on x & y axis
let xPos = 0;
let yPos = 0;

//set speed & direction of circle drawn
let xSpeed = 3;
let ySpeed = -3;


function setup(){
    createCanvas(700,700);
}


function draw() {

    background(209, 75, 107)

    //set direction & speed of circle drawn
    //xPos++; // this is the same as : xPos = xPos +1;
   // xPos = xPos + 1;
    //yPos = yPos + 1;

    //make it goes vertical
    //circle(0, yPos, 30);
    

    //make it goes diagonal
    //xPos = xPos + 1;
    //yPos = yPos + 1;

    // can do it like the above or create a variable for speed ex: xSpeed & ySpeed and change just the variables number make it easier
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    //make the ball falls like there is a gravity pulling
    ySpeed = ySpeed + .2;

    fill(75, 209, 198)
    circle(xPos, yPos, 30);
}