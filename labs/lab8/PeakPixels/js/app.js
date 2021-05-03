let GreenSquare = document.getElementById ("GreenSquare");
var side = 100



GreenSquare.style.backgroundColor = "#7bc990";
GreenSquare.style.width = side + "px";
GreenSquare.style.height = side + "px"

function IncreaseSize() {
       
    
    side = side * 1.1;
    
    GreenSquare.style.height = side + "px";
    GreenSquare.style.width = side + "px";


}

