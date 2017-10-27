let x = 50;
let y = 50;

function setup() {
  // put setup code here
  print('Setup Function is executed only once')
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  x++;
  y = y + 2;
  fill(255,0,0);
  ellipse(x,y,80,80)

}
