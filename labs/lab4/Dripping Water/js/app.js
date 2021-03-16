let PosX = [200];
let PosY = [30,100,220,350, 470]

let SpeedX = 10
let SpeedY = 5


function setup(){
    createCanvas(400, 600);
    
}


function draw() {

    background(0)
    

    
    
    for( var i = 0; i < PosY.length; i ++) {
        
        fill(45, 178, 235)
        circle(PosX, PosY[i], 30);

       
        
    }

   /* if (PosY > height){
        PosY = 0
    } */
   //PosY = PosY + SpeedY;
    
}