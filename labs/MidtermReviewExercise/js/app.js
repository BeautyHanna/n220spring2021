let PosX =400;
let PosY = 300; 

let SpeedX = 3;
let SpeedY = 3;


function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(50)

    rect(770,mouseY,30,50)

    circle(PosX, PosY, 50);

    PosX = PosX + SpeedX;
    PosY = PosY + SpeedY;
    
    
    if (PosY > 600){
        SpeedY = -3;
    } else if (PosX > 800){
        SpeedX = -3;
    } else if (PosY < 0){
        SpeedY = 3;
    } else if (PosX < 0){
        SpeedX = 3;
    }
  
}