let myPhone = {
    color: "#fbd7bd",
    height: 600,
    width: 300,
    xPos: 200,
    yPos: 200,
    phoneRadius: 10

}

let iPhoneCamera = {
    color: "#000000" ,
    xPos: 210,
    yPos: 210,
    radius: 20,

}


function setup(){

    createCanvas(800, 800)

    iPhone()
}

function iPhone (){
    fill (myPhone.color)
    rect(myPhone.xPos, myPhone.yPos, myPhone.width, myPhone.height, myPhone.phoneRadius )
    

}

function iPhoneCamera(){


}