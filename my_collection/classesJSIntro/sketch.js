// Having fun with bubbles

// TODO: Make bubbles floating from the bottom to the top
// make it possible to pop them with the mouse
// Make the background simulate an ocean background
// https://www.youtube.com/watch?v=rHiSsgFRgx4&index=22&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let MAX_BUBBLES = 50;
let bubbles = [];


function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2);
  for (let i = 0; i < MAX_BUBBLES; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(0);

  for (let i = 0; i < MAX_BUBBLES; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor() {
    this.x = random(windowWidth);
    this.y = height;
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}