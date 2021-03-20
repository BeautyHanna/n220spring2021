var circles = [
    { x: 50, r: 30},
    { x: 80, r: 30},
    { x: 120, r: 30},
    { x: 190, r: 30},
    { x: 230, r: 30},
    { x: 380, r: 30},
    { x: 450, r: 30},
    { x: 540, r: 30},
    { x: 680, r: 30},
    { x: 750, r: 30}
    
]



function setup(){
createCanvas(800, 400)


}

function draw(){
    background(0)

    
   

    for( var i = 0; i < circles.length; i++){
        circle(circles[i].x, circleY = mouseY, circles[i].r);

        if (mouseX < circles[i].x + 1){
            circles[i].r = circles[i].r + 0.1
           // fill(Math.random() *255);

           
        }
        if (mouseX > circles[i].x + 1){
            circles[i].r = circles[i].r - 0.5
            
            
        }
        
        
        
    }


    mousePressed()
    mouseReleased()
   
}

function mousePressed(){
    mouseY = mouseY + 1;
}

function mouseReleased(){
    mouseY = mouseY
}