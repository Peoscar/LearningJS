let stickHeight = 100;
let sticks = [];

function setup() {
    createCanvas(windowWidth / 2, windowHeight / 2);
}

function draw() {

    background(0);
    fill(255);
    rect(width / 5, height - stickHeight, 50, stickHeight);
    rect(2 * width / 5, height - stickHeight, 50, stickHeight);
    rect(3 * width / 5, height - stickHeight, 50, stickHeight);
    rect(4 * width / 5, height - stickHeight, 50, stickHeight);

    if (frameCount > 3600) {
        let i = floor(random(0, 100));
        print(i);
        if (i == 5) {
            fill(0, 0, 255);
            rect(3 * width / 5, height - stickHeight, 50, stickHeight);
        }
    }
}

class Stick {
    constructor() {
        this.width = 50;
        this.height = 100;
    }
}