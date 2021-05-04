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
    xPos: 240,
    yPos: 240,
    r: 40,
}


function setup(){

    createCanvas(800, 800)

    
}

function draw() {
    iPhone()
    Camera()
}
function iPhone (){
    fill (myPhone.color)
    rect(myPhone.xPos, myPhone.yPos, myPhone.width, myPhone.height, myPhone.phoneRadius )
    

}
function Camera() {

    fill(iPhoneCamera.color)
    circle(iPhoneCamera.xPos,iPhoneCamera.yPos,iPhoneCamera.r)
    circle(iPhoneCamera.xPos,iPhoneCamera.yPos + 50,iPhoneCamera.r)
    circle(iPhoneCamera.xPos + 40,iPhoneCamera.yPos + 25,iPhoneCamera.r)

}