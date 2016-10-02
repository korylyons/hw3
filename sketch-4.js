function setup () {
	createCanvas(200,200)
	background(255)

function draw () {

  for (var x1 = 20; x1 < 80; x1 = x1 + 10) {
  for (var y = 100; y < 20; y = y - 10) {
  for (var x2 = 180; x2 < 120; x2 = x2 - 10) {
    line (x1, y, x2, y)
        }
      }
    }
  }
}

/*
  for (var i = 20; i <= 480; i = i + 10) {
    var startX = 20;
    var startY = i;
    var endX = i;
    var endY = 20;
    line(startX, startY, endX, endY);
  }
  
  for (var i = 20; i <= 480; i = i + 10) {
    var sX = 480;
    var sY = i;
    var eX = i;
    var eY = 480;
    line(sX, sY, eX, eY);
  }
  */
