
window.onload = function() {
  // Convert the JSON text to a proper object.
  var score = JSON.parse(sessionStorage["personalityScore"]);

  // Show the score numbers.
  document.getElementById("headingE").innerHTML += score.extraversion;
  document.getElementById("headingA").innerHTML += score.accommodation;
  document.getElementById("headingC").innerHTML += score.conscientiousness;
  document.getElementById("headingN").innerHTML += score.neuroticism;
  document.getElementById("headingO").innerHTML += score.openness;

  // Draw the scores.
  plotScore(document.getElementById("canvasE"), score.extraversion, "Extraversion");
  plotScore(document.getElementById("canvasA"), score.accommodation, "Accommodation");
  plotScore(document.getElementById("canvasC"), score.conscientiousness, "Conscientiousness");
  plotScore(document.getElementById("canvasN"), score.neuroticism, "Neuroticism");
  plotScore(document.getElementById("canvasO"), score.openness, "Openness");
};

function plotScore(canvas, score, title) {
  var context = canvas.getContext("2d");

  // Draw the arrows on the side of the chart line.
  var img = document.getElementById("arrow_left");

  context.drawImage(img, 12, 10);
  img = document.getElementById("arrow_right");
  context.drawImage(img, 498, 10);

  // Draw the line between the arrows.
  context.moveTo(39,25);
  context.lineTo(503,25);
  context.lineWidth = 10;
  context.strokeStyle = "rgb(174,215,244)";
  context.stroke();

  // Write the numbers on the scale.
  context.fillStyle = context.strokeStyle;
  context.font = "italic bold 18px Arial";
  context.textBaseline = 'top';

  context.fillText("-20", 35, 50);
  context.fillText("0", 255, 50);
  context.fillText("20", 475, 50);

  // Add the star to show where the score ranks on the chart.
  img = document.getElementById("star");
  context.drawImage(img, (score+20)/40*440+35-17, 0);
}

