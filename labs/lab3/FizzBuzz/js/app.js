function setup(){
    createCanvas(1020,200)
    background(100)
}



function draw(){

    noFill();
    for(var i = 0; i < 25; ++i){

        // set x and y position for every shape
        //x is *40 to spread out the shapes
        let x = i * 40;
        let y = 100;
        
        //set conditions for different shapes & colors to appear
        //first one is to draw square in blue color when iterand is divisible by 3 & 5 first
        if(i % 3 === 0 && i % 5 === 0){
            fill(81, 145, 224);
            square(x+10, 85,  30);
        }
        //this is to draw circles in purples when iterand is divislbe by 3
        else if(i % 3 === 0){
            
            fill(125, 33, 191);
            circle(x+30, y ,15)
        }
        //this is to draw square in green when iterand is divisible by 5
        else if(i % 5 === 0){
            fill(22, 166, 15);
            square(x + 15, 85, 30);
        }
       
        //this is to draw circles that are not divisible by 3 or 5 or both in black only
        else{
            fill(0);
            circle(x+30,y,15)
        }
    }
  
}
console.log(i);