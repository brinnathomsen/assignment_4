function setup() {
	// create a place to draw
	createCanvas(640, 360);
}


function draw() {
	// clear the background
	background(90, 90, 110);

	// draw the black rectangle
	fill(0, 0, 0);
	rect(30, 30, 150, 300);

	var positionX = mouseX;
	var positionY = mouseY;

	if (mouseX < 30) positionX = 30;
	if (mouseY < 30) positionY = 30;
	if (mouseX > 150) positionX = 180;
	if (mouseY > 300) positionY = 330;

	// draw the X
	stroke(255, 0, 0);
	strokeWeight(15);
	line(positionX - 20, positionY - 20, positionX + 20, positionY + 20);
	line(positionX + 20, positionY - 20, positionX - 20, positionY + 20);

}
