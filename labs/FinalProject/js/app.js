
//let SmallBoxes = (document.getElementById("SmallBox"));
let SmallBoxes = Array.from(document.getElementsByClassName("SmallBox"));
console.log (SmallBoxes)
let PlayerTurn = document.getElementById("PlayerTurn");
let WinMessage = document.getElementById("WinMessage")
//var EmptyBoxes = ["","","","","","","","",""];
for (var i = 0; i <SmallBoxes.length; i++){
 SmallBoxes[i].addEventListener("click", playerInput);
 
}



const Box0 = document.getElementById("Box0");
const Box1 = document.getElementById("Box1");
const Box2 = document.getElementById("Box2");

var PlayerOne = "X";
var PlayerTwo = "O";
var PlayerClick = PlayerOne;

var WinCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function playerInput(event) {
    
    
    if (event.target.innerHTML!= "") return;
    if (PlayerClick == PlayerOne) {
        event.target.innerHTML = PlayerOne;
        PlayerClick = PlayerTwo;
        document.getElementById("PlayerTurn").innerHTML = 'Player Two';
    }
   
    else if (PlayerClick  == PlayerTwo) {
        event.target.innerHTML = PlayerTwo;
        PlayerClick = PlayerOne;
        document.getElementById("PlayerTurn").innerHTML = 'Player One';
    }
    
    
  /* if ((Box0 == Box1) && (Box1 == Box2) && (Box2 == Box2)) {
    document.getElementById("WinMessage").innerHTML = 'You Win';
   }
  // function Winner(event){}
 /* else if (Box0 == PlayerClick){
    document.getElementById("WinMessage").innerHTML = 'You Win';
  }
*/
}

/*function Winner (event){
    if ((Box0 != "") && (Box0 == Box1) && (Box1 == Box2))
    document.getElementById("WinMessage").innerHTML = 'You Win';
}*/

