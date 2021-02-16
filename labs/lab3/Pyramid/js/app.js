function setup(){
    createCanvas(400,200)
    background(255)
}

//set the total number of rows
let totalRows = 4;

function draw(){

    //for loop row increases by 1 up to 4 rows
    for (let row = 0; row <= totalRows; row++){

        //for loop increases number of column by 1 on each row
        for (let column = 0; column < row ; column ++){
            noStroke();
            //draw squares evenly 26px apart for every row and
            square (column *26, row *26 , 25);
            //fill square with red color
            fill(255, 0, 0);
            
        }

        
    }
}