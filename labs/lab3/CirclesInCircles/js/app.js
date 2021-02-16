function setup(){
    createCanvas(400,400)
    background(200)
}


function draw(){

    noFill();
    for(var i = 1; i < 40; i++){
        circle(200,200, i * 5);
    }
}