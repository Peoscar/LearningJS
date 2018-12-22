let balls = [];

class bouncyBall {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.velocity = 0;
        this.acc = 9.82;
    }

    show() {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, 10, 10);
    }

    move() {

        if (this.y + 10 >= height) {
            this.velocity = -0.8 * this.velocity;
        } else {
            this.velocity += this.acc / 60;
        }
        this.y = this.y + this.velocity;
        print("SPEED:" + this.velocity)
        print("Y    :" + this.y)
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