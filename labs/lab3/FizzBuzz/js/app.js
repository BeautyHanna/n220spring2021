function setup(){
    createCanvas(1000,200)
    background(100)
}



function draw(){

    noFill();
    for(var i = 0; i < 25; ++i){

        let x = i * 35;
        let y = 100;
        
        if(i % 3 === 0 && i % 5 === 0){
            fill(81, 145, 224);
            square(x+15, 85,  30);
        }
        else if(i % 3 === 0){
            
            fill(125, 33, 191);
            circle(x+30, y ,15)
        }
        else if(i % 5 === 0){
            fill(22, 166, 15);
            square(x + 15, 85, 30);
        }
       
        else{
            fill(0);
            circle(x+30,y,15)
        }
    }
  
}
console.log(i);