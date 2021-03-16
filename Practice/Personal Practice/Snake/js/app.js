let positionsX = [0,0,0,0,0,0,0,0,0,0]
let positionsY = [0,0,0,0,0,0,0,0,0,0]

function setup(){
    createCanvas(400,300)
   
}


function draw(){
    background(0)
   
    positionsX.push(mouseX);
    positionsX.shift();
    
    positionsY.push(mouseY);
    positionsY.shift();
    
    for (var i = 0; i <positionsX.length  + positionsY.length; i++){
       
        circle (positionsX[i], positionsY[i], 50)
    }
    
   
    
}