// Draw a circle that follows the mouse until the mouse is clicked and it freezes. A new circle then follows the mouse while being attached to the first with a line.

// Remember ball X and Y positions
var startX = 0
var startY = 0


function setup() {
	createCanvas(640, 460);
}


function draw() {

	// Define characteristics of background and ball

	background(50, 10, 10);
	strokeWeight(10);
	fill(0, 100, 255);
	stroke(255, 255, 255);

	// Make the ball freeze when clicked

	if (!isMousePressed) {
		startX = mouseX;
		startY = mouseY;

	} else {
		// Draw second ellipse and line when clicked
		line(startX, startY, mouseX, mouseY);
		ellipse(startX, startY, 50, 50);
	}

	ellipse(mouseX, mouseY, 50, 50);

}

// Lesson learned: 1 - variable allow for memory
