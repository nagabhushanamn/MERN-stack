// This function stores the details for a single circle.
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.isSelected = false;
}

// This array hold all the circles on the canvas.
var circles = [];

var canvas;
var context;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  canvas.onmousedown = canvasClick;
};

function addRandomCircle() {
  // Give the circle a random size and position.
  var radius = randomFromTo(10, 60);
  var x = randomFromTo(0, canvas.width);
  var y = randomFromTo(0, canvas.height);

  // Give the circle a random color.
  var colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
  var color = colors[randomFromTo(0, 8)];

  // Create the new circle.
  var circle = new Circle(x, y, radius, color);

  // Store it in the array.
  circles.push(circle);

  // Redraw the canvas.
  drawCircles();
}

function clearCanvas() {
  // Remove all the circles.
  circles = [];

  // Update the display.
  drawCircles();
}


function drawCircles() {
  // Clear the canvas.
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Go through all the circles.
  for(var i=0; i<circles.length; i++) {
    var circle = circles[i];

    // Draw the circle.
    context.globalAlpha = 0.85;
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
    context.fillStyle = circle.color;
    context.strokeStyle = "black";

    if (circle.isSelected) {
      context.lineWidth = 5;
    }
    else {
      context.lineWidth = 1;
    }
    context.fill();
    context.stroke(); 
  }
}

var previousSelectedCircle;

function canvasClick(e) {
  // Get the canvas click coordinates.
  var clickX = e.pageX - canvas.offsetLeft;
  var clickY = e.pageY - canvas.offsetTop;

  // Look for the clicked circle.
  for(var i=circles.length-1; i>=0; i--) {
    var circle = circles[i];

    var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))
    if (distanceFromCenter <= circle.radius) {
      if (previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
      previousSelectedCircle = circle;

      circle.isSelected = true;

      drawCircles();
      return;
    }
  }
}

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}
