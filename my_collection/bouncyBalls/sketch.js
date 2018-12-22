let balls = [];

class bouncyBall {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.velocity = 0;
        this.gravity = 10;
        this.diameter = 30
    }

    show() {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    move() {

        if ((this.y + this.diameter / 2 >= height) && (this.velocity >= 0)) {
            this.velocity = -0.8 * this.velocity;
        } else {
            this.velocity += this.gravity / 60;
        }

        if (!((this.velocity > -0.05) && (this.velocity < 0.05))) {
            this.y = this.y + this.velocity;
        }
    }
}

function setup() {
    createCanvas(windowWidth / 2, windowHeight / 2);

}

function draw() {
    background(0);

    for (var i = 0; i < balls.length; i++) {
        balls[i].show();
        balls[i].move();
    }
}

function mousePressed() {
    balls.unshift(new bouncyBall(mouseX, mouseY));
}