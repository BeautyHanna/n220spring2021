// let carBrands = [ "Subaru", "Chevy", "Ford", "Honda", "Studebakers"];

// console.log(carBrands)
// carBrands[2] = "Nissan";

// //add a space after "a" to create a space before the brand name
// console.log("I own a " + carBrands[2]);

/*let carBrands = [ "Subaru", "Honda", "Studebakers" ];

for(var i = 0; i < 3; i++){

    //it is easier to write it like this instead of writing each code one by one
    console.log("I won a " + carBrands[i]);
}
// the top code is = to the bottom codes with the difference of it is only written once in the for loop making it easier to fix if there are any mistake
console.log("I own a " + carBrands[0]);
console.log("I own a " + carBrands[1]);
console.log("I own a " + carBrands[2]);*/



//problem with the code below, it does not show chevy unless the i < 3 in the for loop is changed to i < 4 this is one of the fix
/*let carBrands = [ "Subaru", "Honda", "Studebakers", "Chevy" ];

for(var i = 0; i < 4; i++){

    
    console.log("I won a " + carBrands[i]);
}*/



//the next fix is as below
//play with the number of car brands in this array to see if the carBrands.length work
/*let carBrands = [ "Subaru", "Honda", "Studebakers",];

// below code will log out the number of cars in the array correctly paste the carBrands.length in replace of number "3" so that it does not matter how many cars in the arrays are there, it will show all of it and now we can add as many items in the array without having to figure out the number of items in the array on our own to write in the loop
//console.log( carBrands.length);

for(var i = 0; i < carBrands.length; i++){

    
    console.log("I won a " + carBrands[i]);
}*/


/*let colors = [ "#7ea04d", "#fe7171", "#335d2d", "#ffb0b0"]

function setup() {
    createCanvas(400, 300);
    
    for( var i = 0; i < colors.length; i ++) {
        //fills up the circles with the colors from the array
        fill(colors[i]);
        circle(30 + 60 * i, 150, 30)
    }
}*/

/*let positions = [ 0,0,0,0 ];

function setup(){
    createCanvas(400, 300);


  
}


function draw() {

    background(50, .9)
    console.log(positions);

    positions.push( mouseX );
    positions.shift();

    for( var i = 0; i < positions.length; i ++) {
       
        circle(positions[i], 150, 30);
    }
}*/

/*let h = 50;
let kl = 100; //offset is bett ethan displacement(centering)
let pol = 1;
let r = 10;
let j = 10;
let i = 0; //counter for the draw loop


function setup() {
  createCanvas(400, 400)
}
//draws a sine curve


//For fun : animate it! do you know how maybe we can animate this? 
//I tried to run it and it says there's an syntax error 
//I saw it
function draw() {
  background(220)   //background commented out
  fill(255, 0, 0)
  let zf = Math.sin(i * pol) * r;   //sin(x) x=i*pol  zf is y value
  circle(i * j + h, zf + kl, 20);

  i++ //will incriment for the draw loop
  if(i == 50) //restarrts the sine wave
    i = 0
  
}*/


let oos = [ 15, 22, 10, 5 ];
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ]

function setup() {
  createCanvas(400, 400);

}

function draw() {

  background(50);
  translate(200,200);

  if (mouseIsPressed) {
    oos.push(Math.random() * 25);

    if(Math.random() < .5 ) {
      ahs.push("#fcba03");
    } else {
      ahs.push("#ed1a80");
    }
  }

  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 40, cos(i)* 40, oos[i]);
  }

}