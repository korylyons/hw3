function setup () {
	createCanvas(200,200)
	background(255)
	
//for (var x = 5; x < 180; x = x + 5) {
//	    for (var y = 
	    for (var w = 5; w <= 180; w = w +5){
//	    var h = w;
    ellipse(100, 100, height+w);
    noFill();
  }

//	ellipse(100, 100, 180, 180);
//	ellipse(100, 100, 120, 120);
//    noFill();
  
	function draw () {
	}
}

/*
  for (var i = 10; i < 180; i = i + 10) {
    var sX = 20;
    var sY = i;
    var eX = i;
    var eY = 20;
    ellipse(sX, sY, eX, eY);
  }
}
	
	function draw () {
	}

function setup() {
  createCanvas(500, 500);
  
  // 1. write out some coordinates
  // 2. figure out the pattern
  //    a. where does it start?
  //    b. where does it end?
  //    c. how much increase each time?
  background(0);
  
  for (var i = 20; i <= 480; i = i + 10) {
    var sX = 480;
    var sY = i;
    var eX = i;
    var eY = 480;
    ellipse(sX, sY, eX, eY);
  }
  
   for (var y = 20; y <= 120; y = y + 20) {
     var x = y;
     ellipse(x, y, 15, 15);
   }
  
   for (var x = 20; x <= 120; x = x + 20) {
     var y = x;
     ellipse(x, y, 15, 15);
     noFill()
   }
  
}

function draw() {
  
}
*/
