let painting;

function setup() {
  createCanvas(400, 400);
  noLoop();
  painting = false;
}

function draw() {
  if (painting) {
    noStroke();
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function mousePressed() {
  if (painting) {
    painting = false;
    noLoop();
  } else {
    painting = true;
    loop();
  }
}

function keyPressed() {
  background(255);
}
