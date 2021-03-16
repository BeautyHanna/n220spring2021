let positionsX = [0,0,0,0,0,0,0,0,0,0]
let positionsY = [0,0,0,0,0,0,0,0,0,0]

function setup(){
    createCanvas(400,300)
   
}


function draw(){
    //set background color
    background(0)
   
    //returns array and remove item from beginning of an array
    positionsX.push(mouseX);
    positionsX.shift();
    
    positionsY.push(mouseY);
    positionsY.shift();
    
    //for loop to draw last 10 positions of circle 
    for (var i = 0; i <positionsX.length  + positionsY.length; i++){
       
        circle (positionsX[i], positionsY[i], 50)
    }
    
   
    
}