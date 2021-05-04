myCircle = {
    X: 200,
    Y: 200,
    R: 50,
    C: "#fa64aa",
    S: 1,
}

function setup(){

    createCanvas(800, 800)
    
}

function draw () {
    
    fill(myCircle.C);
    circle(myCircle.X, myCircle.Y, myCircle.R)
    myCircle.Y = myCircle.Y + myCircle.S;
    
    if (myCircle.Y == 400){
        myCircle.S = -1;
    }else if (myCircle.Y == 200){
        myCircle.S = 1;
    }
 
}

