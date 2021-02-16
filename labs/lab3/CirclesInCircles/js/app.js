function setup(){
    createCanvas(400,400)
    background(200)
}


function draw(){

    noFill();
    //40 is the number of circles
    for(var i = 1; i < 40; i++){
        //draw circles at x and y position and diameter increases by 5 for every circle drawn
        circle(200,200, i * 5);
    }
}