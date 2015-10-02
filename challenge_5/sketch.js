var startX = 0
var startY = 0


function setup() {
	createCanvas(640, 460);
}


function draw() {

	background(50, 10, 10);
	strokeWeight(10);
	ellipseMode(RADIUS);

	fill(0, 100, 255);
	stroke(255, 255, 255);


	if (!isMousePressed) {
		startX = mouseX;
		startY = mouseY;
	} else {
		line(startX, startY, mouseX, mouseY);
		ellipse(startX, startY, 20, 20);
	}

	ellipse(mouseX, mouseY, 20, 20);

}
