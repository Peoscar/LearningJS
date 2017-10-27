
function setup() {
  // Setting up background environment
  createCanvas(640,360);
}

function draw() {
  // Set background color
  background(51);

  // White rectangle with green border, border size 3
  fill(255);
  stroke(0,255,0);
  strokeWeight(3);
  rect(100,200,75,150);

  // Red ellipse with white border, border size 1
  fill(255,0,0);
  stroke(255);
  strokeWeight(1);
  ellipse(300,200,80,80);

  // Purple line with weight 5
  stroke(255,0,255);
  strokeWeight(5);
  line(50,50,350,350);
}
