function setup(){
    createCanvas(400,300)
    //background(0)
}


function draw(){
    background(0)
   
    
    if (mouseX < 200){
        fill (63, 181, 204) 
        circle (mouseX, mouseY, 50)
    } else { 
        fill (171, 0, 17)
        circle (mouseX, mouseY, 50)
    }
    
    
}