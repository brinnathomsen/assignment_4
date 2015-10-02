function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// clear the background
	background(90, 90, 110);

	// set a fill color
	fill(255, 255, 255);

	// draw the black rectangle
	fill(0);
	rect(30, 30, 150, 300);

	if (mouseX < 30) {
		margins(50, mouseY + 20, 10, mouseY - 20)
	}

	if (mouseX > 150) {
		margins(200, mouseY + 20, 160, mouseY - 20)
	}

	if (mouseY < 30) {
		margins(mouseX - 20, 10, mouseX + 20, 50)
	}
	if (mouseY > 330) {
		margins(mouseX - 20, 310, mouseX + 20, 350)
	}

}

// drawing the x
function inside() {
	stroke(90, 90, 110);
	strokeWeight(15);
	line(mouseX + 20, mouseY - 20, mouseX - 20, mouseY + 20);
	line(mouseX + 20, mouseY + 20, mouseX - 20, mouseY - 20);
}

function margins(right, up, left, down) {
	stroke(255, 0, 0);
	strokeWeight(15);
	line(right, up, left, down);
	line(right, down, left, up);
}
