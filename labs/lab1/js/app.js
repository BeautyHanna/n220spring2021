function setup(){
    createCanvas(800,600)
    background(230)
}

var midX = 400
var midY = 300

function draw(){

    //draw the stick of a flower
    stroke(0)
    strokeWeight(0.5)
    fill(179, 76, 12)
    rect(380,midY,10,300)

    //draw leaves of a flower
    let leafY = 280

    fill(12, 179, 51)
    stroke(0)
    bezier(360,leafY,340,285,315,290,310,320)
    bezier(360,leafY,350,320,330,330,310,320)

    bezier(375,leafY,355,295,345,midY,360,330)
    bezier(375,leafY,385,295,375,midY,360,330)

    bezier(midX,leafY,380,290,370,310,415,330)
    bezier(midX,leafY,420,290,430,310,415,330)

    bezier(425,leafY,420,290,415,310,445,320)
    bezier(425,leafY,470,290,440,310,445,330)

    
}