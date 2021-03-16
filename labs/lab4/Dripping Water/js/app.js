let PosY = [];
let frameRate = 0;
let SpeedY = 5;


function setup(){
    createCanvas(400, 600);
    
}


function draw() {

    background(0)
    

    
    
    for( var i = 0; i < PosY.length; i ++) {
        
        fill(45, 178, 235)
        circle(200, PosY[i], 30);
        PosY[i] = PosY[i] + SpeedY;
       
        
    }

    frameRate = frameRate + 1 //PosY = PosY + SpeedY;

   if (frameRate == 10){
        frameRate = 0

        PosY.push(0)

        if (PosY.length > 50){

            PosY.length.shift();
        }
    } 
   
    
}