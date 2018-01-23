let myX = 100;
let myY = 100;
let r, g, b = 0;
let moveBackwards = false;
let moveDown = false;

function setup() {
	createCanvas(600, 600);
	background(255);
}

function draw() {

	fill(r, g, b);
	ellipse(myX, myY, 50, 50);

	// If the circle has reached the end of the canvas, start moving the other way
	if (moveBackwards == true) {
		myX = myX - 2;
	} else {
		myX = myX + 2;
	}

	if (moveDown == true) {
		myY = myY + 2;
	}

	if (myY+(50/2) > height) {
		myY = 0;
	}

	if (myX+(50/2) > width) {
		moveBackwards = true;
		updateRGB();
	} else if (myX-(50/2) < 0) {
		moveBackwards = false;
		updateRGB();
	}
}

function updateRGB() {
	r = random(256);
	b = random(256);
	g = random(256);
}

function mousePressed() {
	moveDown = true;
}

function mouseReleased() {
	moveDown = false;
}
