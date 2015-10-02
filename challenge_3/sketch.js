function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// clear the background
	background(90, 90, 110);


	// draw the black rectangle
	fill(0);
	rect(30, 30, 150, 300);



	// drawing the x
	function inside() {
		stroke(90, 90, 110);
		strokeWeight(15);
		line(mouseX + 20, mouseY - 20, mouseX - 20, mouseY + 20);
		line(mouseX + 20, mouseY + 20, mouseX - 20, mouseY - 20);
	}


	var right = mouseX + 20;
	var left = mouseX - 20;
	var up = mouseY - 20;
	var down = mouseY + 20;



	if ((mouseX > 30) mouseX = mouseX

		&& (mouseX < 180) && (mouseY > 30) && (mouseY < 330)) {
		stroke(255, 0, 0);
		strokeWeight(15);
		line(right, up, left, mouseY + 20);
		line(right, down, left, up);

	}

	if (mouseX < 30) {
		line(mouseX + 20, mouseY - 20, mouseX - 20, mouseY + 20);
	}
	right = 30
}
