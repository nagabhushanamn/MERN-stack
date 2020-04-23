var slideNumber;
var req = new XMLHttpRequest();

window.onload = function() {
  slideNumber = 0;
}

window.onpopstate = function(e) {
  if (e.state != null) {
    slideNumber = e.state;
    goToNewSlide();
  }
}

function nextSlide() {
  if (slideNumber == 5) {
    slideNumber = 1;
  } else {
    slideNumber += 1;
  }

  history.pushState(slideNumber, null, "ChinaSites" + slideNumber + ".html");
  goToNewSlide();
  return false;
}

function goToNewSlide() {
  if (req != null) {
    req.open("GET", "ChinaSites" + slideNumber + "_slide" + ".html", true);
    req.onreadystatechange = newSlideReceived;
    req.send();
  }
  else {
    // There was a problem. Ignore it.
  }
}

function previousSlide() {
  if (slideNumber == 1) {
    slideNumber = 5;
  } else {
    slideNumber -= 1;
  }

  history.pushState(slideNumber, null, "ChinaSites" + slideNumber + ".html");
  goToNewSlide();
  return false;
}


function newSlideReceived() {
  if ((req.readyState == 4) && (req.status == 200))
 {

    document.getElementById("slide").innerHTML = req.responseText;
  }
}
