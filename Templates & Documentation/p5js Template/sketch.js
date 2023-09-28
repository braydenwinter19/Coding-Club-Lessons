// Declare global variables here

// Initialize global variables here
function setup() {
    canvas = createCanvas(document.body.clientWidth, window.innerHeight);
    canvas.position(0, 0);
    canvas.class("p5canvas");
}

// Draw scene here
function draw() {
    background(255);

}

function windowResized() {
    resizeCanvas(document.body.clientWidth, window.innerHeight);
}