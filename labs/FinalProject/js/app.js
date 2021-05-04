// To inform players of who turn it is
let PlayerTurn = document.getElementById("PlayerTurn");
// Display win message
let WinMessage = document.getElementById("WinMessage");

let SmallBoxes = document.getElementById("SmallBox");
SmallBoxes.addEventListener("click", playerInput);

let RestartButton = document.getElementById("Restart");
// I tried using querySelector but it does not work for me
//let XOBoxes = document.querySelectorAll ("SmallBox");
// Attempted to make this into an Array. 
//let SmallBoxes = Array.from(document.getElementsByClassName("SmallBox"));
//var EmptyBoxes = ["","","","","","","","",""];
/*for (var i = 0; i <SmallBoxes.length; i++){
 SmallBoxes[i].addEventListener("click", playerInput);
 
}*/





var PlayerOne = "X";
var PlayerTwo = "O";
var PlayerClick = PlayerOne;

// Tried making each box into arrays, did not work for me.
let Box0 = document.getElementsByClassName("Box0")
let Box1 = document.getElementsByClassName("Box1")
let Box2 = document.getElementsByClassName("Box2")

//let XOBoxes = [Box0, Box1, Box2]


// Attempted to use the Winning Combos Probability somehow but I could not figure out how to implement it. 
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


// function insert X's and O's in the boxes

function playerInput(event) {
    
    // make it so that the boxes are only clickable ones and the symbol does not change
    if (event.target.innerHTML!= "") return;

    if (PlayerClick == PlayerOne) {
        event.target.innerHTML = PlayerOne;
        PlayerClick = PlayerTwo;
        // To switch to PlayerTwo after Clicking
        document.getElementById("PlayerTurn").innerHTML = 'Player Two';
        CheckWinner(event);
    }
   
    else if (PlayerClick  == PlayerTwo) {
        event.target.innerHTML = PlayerTwo;
        PlayerClick = PlayerOne;
        document.getElementById("PlayerTurn").innerHTML = 'Player One';
        CheckWinner(event);
    }
 
    CheckWinner(event);
    
}

// I have refix and rewrote this code so many times, but it still did not work for me. 
function CheckWinner (event)  {
    


    if (Box0 === PlayerOne){
        document.getElementById("WinMessage").innerHTML = 'You Win';
    }

    
/*function Winner (event){
    if ((Box0 != "") && (Box0 == Box1) && (Box1 == Box2))
    document.getElementById("WinMessage").innerHTML = 'You Win';
}*/
}

function Restart(){
    document.location.reload(true);
}