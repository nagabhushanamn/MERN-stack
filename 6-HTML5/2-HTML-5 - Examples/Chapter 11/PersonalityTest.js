
// Store the answers for all the questions here.
var answers = [];

window.onload = function() {
  for(var i=1; i < 51; i++) {
    answers[i] = 0;
  }
};

function setAnswer(inputElement) {
  var divContainer = inputElement.parentNode;

  var questionNumber = Number(divContainer.getAttribute("data-questionNumber"));
  answers[questionNumber] = Number(inputElement.value);

  var inputElements = divContainer.getElementsByTagName("input");
  for(var i in inputElements) {
    inputElements[i].className = "";
  }

  inputElement.className = "Selected";
}


function getScores() {

  var e = answers[1] + answers[11] + answers[21] + answers[31] + answers[41]
   - answers[6] - answers[16] - answers[26] - answers[36] - answers[46];

  var a = answers[7] + answers[17] + answers[27] + answers[37] + answers[47]
   - answers[2] - answers[12] - answers[22] - answers[32] - answers[42];
  var c = answers[3] + answers[13] + answers[23] + answers[33] + answers[43]
   - answers[8] - answers[18] - answers[28] - answers[38] - answers[48];

  var n = answers[4] + answers[14] + answers[24] + answers[34] + answers[44]
    - answers[9] - answers[19] - answers[29] - answers[39] - answers[49];

  var o = answers[5] + answers[15] + answers[25] + answers[35] + answers[45]
    - answers[10] - answers[20] - answers[30] - answers[40] - answers[50];

  // Create the PersonalityScore object.
  var score = new PersonalityScore(o, c, e, a, n);

  // Store it, in handy JSON format.
  sessionStorage["personalityScore"] = JSON.stringify(score);

  // Go to the results page
  window.location = "PersonalityTest_Score.html";
}

function PersonalityScore(o, c, e, a, n) {
  this.openness = o;
  this.conscientiousness = c;
  this.extraversion = e;
  this.accommodation = a;
  this.neuroticism = n;
}
