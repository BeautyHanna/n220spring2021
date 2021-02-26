/*console.log("Hellow from the other side");

//below is function definition
//the "Hello inside" will not appear as we have not run it yet. The computer only runs the console.log at the top of the page and not the one inside the function.
function sayHello(){
    console.log("Hello inside");
}

//bellow is how you run/invoke the function "sayHello"
sayHello();*/

let sunX = 40;

function setup(){

    createCanvas(400,300);
    background(100)

    //don't forget to write the quotation marks when writing down the hex color code!
    //this is where you run/invoke the code!
    //make sure the invoke code in the bracket below  is in the correct sequence and match the function written
    //drawSun("#e3a736", 15 );

    //below is how you return the return staement.
   var functionResult = isEven(2);
   console.log(functionResult);
}


function isEven(amount) {
    //this boolean (true/false) can only stays in this function. it literally lives and dies in JUST THIS FUNCTION.
    let result = amount % 2 == 0;

    //return statement make it possible for us to use this function OUTSIDE of this function. this example pairs it with the functionResult in the setup function. 
    //THIS IS HOW YOU CALCULATE STUFF THANKS        
   return result;
}


function draw() {

    //this draws background in every frame
    background(100);
    sunX ++;

    //below is the code that makes the sun moves downward WITH the background COLORED ON THE FUNCTION DRAW() 
    //drawSun("#e3a736", 15, sunX );

    //when using mouseY, you can control the sun! AGAIN, WITH BACKGROUND ON IN FUNCTION DRAW. OTHERWISE, YOU WILL SEE IT SHOWS UP IN EVERY FRAME AND IT WILL BLEND TOGETHER. 
    // drawSun("#e3a736", 15, mouseY, mouseX );

    //YES you can have the same function WITH DIFFERENT PARAMETERS. PLAY AROUND TO SEE WHAT HAPPENS :P
    drawSun("#1a5a78", 15, mouseY - 10, mouseX - 10);
    drawSun("#e3a736", 15, mouseY, mouseX );


}

//read the bracket! 10 = numrays. You wanna change the number of rays, change it in the invoke area so that you don't have to change every single code like in the function below as well as in the for loop WHERE YOU CAN SEE THE numRAYS in there too DUH AND IT GOES IN SEQUENCE MAKE SURE IT IS IN THE CORRECT CORRECT CORRECT ORDER NIYA!!! MAKE SURE!!!

//mouseY in the drawSUN in the DRAW FUNCTION, is controlling the POSITION OF THE YHEIGHT AND SAME GOES FOR MOUSEX THANK YOU
function drawSun(sunColor, numRays, yHeight, xHeight) {

    fill(sunColor);
    stroke(sunColor);

    for( var i = 0; i < numRays; i++){
        
        //again xHeight & yHeight in circle and line COLLERATES WITH MOUSE Y AND X in the drawSun in the draw function! IT IS BETTER IF YOU WRITE DOWN X FIRST AND Y BUT IM JUST FOLLOWING THE TEACHER'S EXAMPLE HERE OUO

        //.p.s TRY NOT CHANGING CIRCLE X POSITION TO XHEIGHT AND SEE HOW IT MOVES LMFAO
        line(xHeight, yHeight, i *20, 300);
    }
    circle(xHeight, yHeight, 40);


}