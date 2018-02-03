let x;
let y;
let xspeed = 3;
let yspeed = 3;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = random(windowWidth);
	y = random(windowHeight);
}

function draw() {
	background(221);

	drawSwRobot(x,y);

	if (x < 0 || x > windowWidth) {
		xspeed = xspeed * -1;
	}

	if (y < 0 || y > windowHeight) {
		yspeed = yspeed * -1;
	}

	x += xspeed;
	y += yspeed;
}

function drawSwRobot(xR, yR) {
	strokeWeight(1);
	fill('grey');
	stroke(0);
	ellipse(xR,yR,100, 30);
	ellipse(xR,yR+30,100, 30);
	// Camera1
	fill(0);
	stroke(250);
	ellipse(xR-10,yR,10,10);
	// Camera2
	fill(0);
	stroke(250);
	ellipse(xR+46,yR,7,10);

	strokeWeight(3);
	stroke(50);
	// Left leg
	line(xR-30,yR+35,xR-50,yR+100);
	// Middle leg
	line(xR,yR+45,xR,yR+90);
	// Right leg
	line(xR+30,yR+35,xR+50,yR+100);
}
