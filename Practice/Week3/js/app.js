//let i = 1;

/*while(i < 5)
{
    console.log(i);
}*/

/*console.log(i++); //this gives 1 because addition is after the i
console.log(i); //this gives the value 2 because it adds from the previous line, which is 1 + 1
console.log(i++); // this gives the value 2 because there is no addition in this so it takes the previous value and sticks to it which is 2*/



/*console.log(i++); //this gives 1 because addition is after the i and there is no number after i on this line
console.log(i++); //this gives the value 2 because it adds from the previous line, which is 1 + 1
console.log(i++); // this gives the value 3 because it t adds from the previous line, which is 2 + 1 =3*/

/*console.log(i++); //this gives 1 because addition is after the i and there is no number after i on this line
console.log(i--); //this gives the value 2 because it adds from the previous line, which is 1 + 1
console.log(i++); // this gives the value 1 because it subtracks from the previous line, which is 2 - 1 = 1*/

/*console.log(++i); //this gives 2 because addition is before the i and i = 1 so 1 + 1 = 2
console.log(i++); //this gives the value 2 because the number from previous line is 2 and the plus is after the i so there should be no change since there is non addition between the 2 lines
console.log(i++); // this gives the value 3 because it t adds from the previous line, which is 2 + 1 =3*/

/*console.log(++i); //this gives 2 because addition is before the i and i = 1 so 1 + 1 = 2
console.log(++i); //this gives 3 because plus sign is before the i again and from the previous line, result was 2 and 2 + 1 = 3 
console.log(++i); // this gives 4 because plus sign is before the i again and from the previous line, result was 3 and 3 + 1 = 4 */




/*while loop vs for loop

let i = 0
while loop syntax
while(i < 5)
{
    console.log(i);
    i++;
}
console.log("Afterwards: " + i);


//below is the for loop syntax 
//for loop is the condensed version of while loop which makes it easier to code
for(var y = 0; y < 5; y++){
    console.log(y);
}

console.log("Afterwards: " + y);*/



/*function setup(){
    createCanvas(400,300)
}

function draw(){
    background(100);

    noFill(); //turn this off and on and see what happens :P

    //For loop syntax
    /*for(var i = 0; i < 5;/*this draws 5 circles but only 4 circles shows up because  in the calculation below, 0 x 15 = 0 which causes no circle is drawing i++){
        
        //circle(100, 100, i * 15 /*this is 0 x 15 = 0, 1 x 15 = 15, 2 x 15 = 30, and it goes on ); 
       // console.log (i)

        //circle(100,100, 15); this code will draw 4 circles with the same radius size of 15 which will overlap with each other


    }*/


    /*for(var i = 0; i < 15; i++){

        stroke(255 - i * 15);
        
        circle(200, 150, i *10);
        


    }*/

    /*for(var i = 15; i > 0; i--){


        stroke(255 - i * 15);
        
        circle(200, 150, i *10);
    
console.log("Afterwards: " + i);
    }*/

    /*for(var i = 15; i > 0; i--){

        var color = Math.random();
        console.log(color);

        stroke(255 - i * 15);
        
        circle(200, 150, i *10);
    
console.log("Afterwards: " + i);
    }
}*/


function setup(){
    createCanvas(400,300)
    background(100)
    //For loop syntax
    for(var i = 15; i > 0; i--){

        var randColor = Math.random() * (255) /*255 because this color is between white*/;

        fill(randColor);
        console.log(color);

        stroke(200 - i * 15);
        
        circle(200, 150, i *10);
    
console.log("Afterwards: " + i);
    }
}
