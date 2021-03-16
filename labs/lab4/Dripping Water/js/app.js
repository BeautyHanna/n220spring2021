let PosY = [];
let frameRate = 0;
let SpeedY = 5;


function setup(){
    createCanvas(400, 600);
    
}


function draw() {

    background(0)
    

    
    //draw circle and makes it drop at 5px per frame
    for( var i = 0; i < PosY.length; i ++) {
        
        fill(45, 178, 235)
        circle(200, PosY[i], 30);
        PosY[i] = PosY[i] + SpeedY;
       
        
    }

    //to increase the frame 
    frameRate = frameRate + 0.5

    //every 10 frame draw a circle at the top of the canvas
   if (frameRate == 10){
        frameRate = 0

        //add to the end of the array 
        PosY.push(0)

        if (PosY.length > 50){
            
            //remove a position Y from the beginning of the array 
            PosY.length.shift();
        }
    } 
   
    
}