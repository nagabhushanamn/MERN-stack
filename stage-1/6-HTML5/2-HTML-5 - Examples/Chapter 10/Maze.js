var canvas;
var context;

// The current face position.
var x = 0;
var y = 0;

// The current face speed (in both direction).
var dx = 0;
var dy = 0;

window.onload = function() {
  // Set up the canvas.
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // ** New code for local storage. **
  var x = 268;
  var y = 5;
  if (localStorage) {
    var savedX = localStorage.getItem("mazeGame_currentX");
    var savedY = localStorage.getItem("mazeGame_currentY");
    if (savedX != null) x = Number(savedX);
    if (savedY != null) y = Number(savedY);
  }

  // Draw the maze background.
  drawMaze("maze.png", x, y);

  // When the user presses a key, run the processKey() function.
  window.onkeydown = processKey;
};

window.onbeforeunload = function(e) {
  if (localStorage) {
    if (confirm("Do you want to save your current position in the maze, for next time?")) {
      localStorage.setItem("mazeGame_currentX", x);
      localStorage.setItem("mazeGame_currentY", y);
    }
  }
}

// Keep track of the current timer, so the drawing can be 
// easily stopped and restarted if a new maze is loaded.
var timer;

function drawMaze(mazeFile, startingX, startingY) {
  // Stop drawing (if it's taking place).
  clearTimeout(timer);

  // Stop the happy face (if it's moving).
  dx = 0;
  dy = 0;

  // Load the maze picture.
  var imgMaze = new Image();
  imgMaze.onload = function() {
    // Resize the canvas to match the maze picture.
    canvas.width = imgMaze.width;
    canvas.height = imgMaze.height;

    // Draw the maze.
    context.drawImage(imgMaze, 0,0);

    // Draw the face.
    x = startingX;
    y = startingY;

    var imgFace = document.getElementById("face");
    context.drawImage(imgFace, x, y);
    context.stroke();

    // Draw the next frame in 10 milliseconds.
    timer = setTimeout("drawFrame()", 10);
  };
  imgMaze.src = mazeFile;
}


function processKey(e) {
  // If the face is moving, stop it.
  dx = 0;
  dy = 0;

  // If an arrow key was pressed, and adjust the speed accordingly.
  // (Ignore any other key.)

  // The up arrow was pressed, so move up.
  if (e.keyCode == 38) {
    dy = -1;
  }

  // The down arrow was pressed, so move down.
  if (e.keyCode == 40) {
    dy = 1;
  }

  // The left arrow was pressed, so move left.
  if (e.keyCode == 37) {
    dx = -1;
  }

  // The right arrow was pressed, so move right.
  if (e.keyCode == 39) {
    dx = 1;
  }
}

function checkForCollision() {
  // Grab the block of pixels where the happy face is, but extend the edges just a bit.
  var imgData = context.getImageData(x-1, y-1, 15+2, 15+2);
  var pixels = imgData.data;

  // Check these pixels.
  for (var i = 0; n = pixels.length, i < n; i += 4) {
    var red = pixels[i];
    var green = pixels[i+1];
    var blue = pixels[i+2];
    var alpha = pixels[i+3];

    // Look for black walls (which indicates a collision).
    if (red == 0 && green == 0 && blue == 0) {
      return true;
    }
    // Look for gray edge space (which indicates a collision).
    if (red == 169 && green == 169 && blue == 169) {
      return true;
    }
  }
  // There was no collision.
  return false;
}


function drawFrame() {
  // Only draw a new frame if the face is moving.
  if (dx != 0 || dy != 0) {
    // Clear away the previous face position (but leave a yellow patch there,
    // to create the "trail" effect.)
    context.beginPath();
    context.fillStyle = "rgb(254,244,207)";
    context.rect(x, y, 15, 15);
    context.fill()

    // Increment the face's position.
    x += dx;
    y += dy;

    // Stop the face if it hit a wall, and move it back to the old position.
    if (checkForCollision()) {
      x -= dx;
      y -= dy;
      dx = 0;
      dy = 0;
    }

    // Draw the face at its new position.
    var imgFace = document.getElementById("face");
    context.drawImage(imgFace, x, y);

    // Check if the user has finished the maze (reached the bottom edge).
    // If so, show a message and return from the function, so no more frames are drawn.
    if (y > (canvas.height - 17)) {
      alert("You win!");
      return;
    }
  }

  // Draw a new frame in 10 milliseconds.
  timer = setTimeout("drawFrame()", 10);
}

function resetPosition() {
  drawMaze('maze.png', 268, 5);
}