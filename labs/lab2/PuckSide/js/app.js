function setup(){
    createCanvas(400,300)
   
}


function draw(){
    background(0)
   
    //using if statement when mouseX position is on the left side of the canvas half of 400 = 200, circle turns blue, and the right side, circle turns red
    if (mouseX < 200){
        fill (63, 181, 204) 
        circle (mouseX, mouseY, 50)
    } else { 
        fill (171, 0, 17)
        circle (mouseX, mouseY, 50)
    }
    
    
}