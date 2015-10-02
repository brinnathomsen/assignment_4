function setup() {
	createCanvas(640, 460);
}



function draw() {

	if (mouseIsPressed) {

		background(100, 10, 10);
		stroke(255, 255, 255);
		strokeWeight(7);
		line(100, 100, mouseX, mouseY);


		fill(0, 100, 255);
		ellipse(mouseX, mouseY, 50, 50);
		ellipse(100, 100, 50, 50);



	} else {

		background(50, 10, 10);
		stroke(255, 255, 255);
		strokeWeight(7);
		fill(0, 100, 255);
		ellipse(mouseX, mouseY, 50, 50);
	}



}
