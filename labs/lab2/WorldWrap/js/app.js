let PosX = 0;
let SpeedX = 5;

function setup(){
    createCanvas(800,600)
}


function draw(){
    
    background(0);
    //draw circle starting at Position X
    circle (PosX , 300, 50)
    
    //if statement to move circle back to the beginning which is the left of screen
    if (PosX > 800){

        PosX = 0;
    } 
    //to move the circle at 5 pixels per frame
    PosX = PosX + SpeedX;
}