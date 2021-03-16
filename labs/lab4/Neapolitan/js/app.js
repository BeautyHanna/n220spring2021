let Neapolitan = ["#ff8daa", "#f6e2b3", "#7e6651"]

function setup(){
    createCanvas(300, 300);


  
}


function draw() {

    
    

    for( var i = 0; i < Neapolitan.length; i ++) {
        //fills up the circles with the colors from the array
        fill(Neapolitan[i]);
        rect(100 * i,0, 200, 300)
    }
}