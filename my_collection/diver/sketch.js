let PEBBLE_CNT = 50;
let PLANT_CNT = 4;
let BUBBLE_CNT = 10;
let pebbles = [];
let plants = [];
let floorTop;
let diver;



/* -----------------------Setup----------------------- */
function setup() {
  createCanvas(windowWidth, windowHeight);
  floorTop = height - 200;

  // Setup pebbles on ocean floor
  for (let i = 0; i < PEBBLE_CNT; i++) {
    pebbles[i] = new Pebble(random(width), random(floorTop, height));
  }

  // Setup plant life on ocean floor
  for (let i = 0; i < PLANT_CNT; i++) {
    plants[i] = new Plant(random(width), random(floorTop, height));
  }

  diver = new Diver();

  frameRate(60);
}

/* -----------------------Draw----------------------- */
function draw() {
  background(10, 80, 150);


  oceanFloor();

  for (let i = 0; i < PEBBLE_CNT; i++) {
    pebbles[i].show();
  }

  for (let i = 0; i < PLANT_CNT; i++) {
    plants[i].show();
  }

  for (let i = 0; i < BUBBLE_CNT; i++) {
    diver.bubbles[i].show();
    diver.bubbles[i].move();
  }

  // diver.tube();
  diver.show();
}
/* -----------------------p5 Events----------------------- */
function mousePressed() {
  diver.breathe()
}

/* -----------------------Public Functions----------------------- */
// Draw the ocean floor
function oceanFloor() {
  noStroke();
  fill(165, 115, 45); // RGB for a light brown
  rect(0, floorTop, width, 200);

  stroke(0);
  strokeWeight(2);

  beginShape();
  curveVertex(0, floorTop);
  curveVertex(0, floorTop);
  curveVertex(width / 8, floorTop - 30);
  curveVertex(width / 4, floorTop - 15);
  curveVertex(width / 2, floorTop - 10);
  curveVertex(5 * width / 8, floorTop - 1);
  curveVertex(3 * width / 4, floorTop - 20);
  curveVertex(width, floorTop);
  curveVertex(width, floorTop);
  endShape();

}

function drawPlant(x, y) {
  fill(69, 139, 0);
  beginShape();
  curveVertex(x, y);
  curveVertex(x, y);
  curveVertex(x, y - 15);

  curveVertex(x - 20, y - 30);
  curveVertex(x - 20, y - 50);
  curveVertex(x - 10, y - 60); //Top of left
  curveVertex(x - 3, y - 50);

  curveVertex(x, y - 30);
  curveVertex(x + 5, y - 35);
  curveVertex(x + 5, y - 85);
  curveVertex(x + 15, y - 100); // Middle peak
  curveVertex(x + 25, y - 85);
  curveVertex(x + 25, y);
  curveVertex(x + 25, y);
  endShape();
}
/* -----------------------Classes----------------------- */

class Plant {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
  }

  show() {
    drawPlant(this.x, this.y);
  }
}

class Pebble {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
  }

  show() {
    point(this.x, this.y);
  }
}

class Bubble {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
  }

  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-5, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

class Diver {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.bubbles = [];

    for (let i = 0; i < BUBBLE_CNT; i++) {
      this.bubbles[i] = new Bubble();
    }
  }

  // When called the diver should have bubbles coming out
  breathe() {
    for (let i = 0; i < BUBBLE_CNT; i++) {
      this.bubbles[i].x = mouseX;
      this.bubbles[i].y = mouseY;
    }
  }

  // show() {
  //   cursor("file:///C:/git/LearningJS/my_collection/diver/MiLkj4jgT.png");
  // }
  show() {
    strokeWeight(1);

    fill(0);
    stroke(0);
    rect(mouseX + 10, mouseY + 10, 80, 30);

    ellipse(mouseX, mouseY, 30, 50); //Head
    noStroke();
    fill(229, 174, 134);
    ellipse(mouseX - 3, mouseY + 1, 20, 40); // Face

    fill(203, 217, 15);
    rect(mouseX + 35, mouseY + 2, 30, 15);

    stroke(0);
    strokeWeight(10);
    line(mouseX + 90, mouseY + 12, mouseX + 170, mouseY + 6);
    line(mouseX + 90, mouseY + 38, mouseX + 170, mouseY + 40);
  }


  // Update the divers position on the canvas
  move() {

  }

  tube() {
    fill(0);
    noStroke();
    rect(mouseX, 0, 2, mouseY);
  }

  // TODO Wave
  // When called the diver will wave his arm
  // wave() {
  //
  // }
}