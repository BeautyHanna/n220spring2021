// Set an array of colors
let Colors = ["#de5793", "#5cd7ed", "#1cba41", "#c91818"]


function setup(){
    createCanvas(400,400)
    background(200)
    
    
}

//Draw a white circle on the canvas
function draw(){
    circle (200,200,200);
}


//fill up the circle with a random color picked from the array
function mouseClicked(){
    
    var random = Colors[Math.floor(Math.random() * Colors.length)];
    
    fill(random);
   
}