function setup () {
	createCanvas(500,500)
	background(255)

  for (var i = 20; i <= 490; i = i + 10) {
    line(250, 10, 10+i, 490)
  }
}

function draw() {
}

/*
for (var i = 20; i <= 490; i = i + 10) {
    var startX = 250;
    var startY = 10;
    var endX = i;
    var endY = 480;
    line(startX, startY, endX, endY);
  }
*/
