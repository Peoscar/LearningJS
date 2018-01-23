let painting;

function setup() {
  createCanvas(400, 400);
  noLoop();   // Deactivates looping calls to draw() function
}

function draw() {
    noStroke();
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {
    loop();   // Activates looping calls to draw() function
}

function mouseReleased() {
  noLoop();   // Deactivates looping calls to draw() function
}

function keyPressed() {
  background(255);
}
