function setup(){
    createCanvas(800,600)
    background(230)
}

var midX = 400
var midY = 300

function draw(){

    //draw sky
    fill(112, 224, 255)
    rect(0,0,800,250)

    //draw grass
    fill(114, 237, 114)
    rect(0,250,800,300)

    //draw earth
    fill(99, 38, 0)
    rect(0,550,800,50)

    //draw the stick of a flower
    stroke(0)
    strokeWeight(0.5)
    fill(179, 76, 12)
    rect(380,290,10,310)

    //draw thorns on the stick
    triangle(379,335,355,345,379,345)
    triangle(391,400,410,400,391,405)
    triangle(379,460,355,460,379,470)
    triangle(391,560,410,575,391,570)

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

    //draw rose bud
    fill(186, 6, 0)
    rect(320,145,125,150,40)

    //draw rose petals
    ellipse(383, 172,120,60)
    ellipse(383, 169,90,40)
    ellipse(383, 166,60,20)
}