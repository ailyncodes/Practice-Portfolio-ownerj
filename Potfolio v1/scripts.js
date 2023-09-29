var boxes = [];
var boxes1 = [];

var nboxes = 51;

var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL)
}
function setup() {
    
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0)
    canvas.style("z-index", "-1")
    
    for (i = 0; i < nboxes; i++) {
        boxes[i] = new myBox();
    }
    for (i = 0; i < nboxes; i++) {
        boxes1[i] = new myBox1();
    }
    
}

function draw() {
    background(255);
    translate(-1250,-500)
    push();
    boxes.forEach(function(){
        push();
        rotateZ(frameCount * 0.005)
        boxes[0].display();
        pop();
        translate(50,0)
    }) 
    pop();

    push();
    translate(0,30)
    boxes.forEach(function(){
        push();
        rotateZ(frameCount * 0.005)
        boxes1[0].display();
        pop();
        translate(50,0)
    })
    pop();
}


function myBox() {
    this.display = function () {
        box(20)
    }
}

function myBox1() {
    this.display = function () {
        translate(0,0)
        box(20)
    }
}
function animation(item, index, arr){
    
}