// Need event listeners on all buttons
document.onload = initialisePage();
var totalClicks = 0;
var totalHtml = document.getElementsByClassName('total');
totalHtml[0].innerHTML = "You have clicked 0 times.";


function initialisePage() {
  document.getElementById("one").addEventListener("click", randomiseButton);
  document.getElementById("two").addEventListener("click", randomiseButton);
  document.getElementById("three").addEventListener("click", randomiseButton);
  document.getElementById("four").addEventListener("click", randomiseButton);
  document.getElementById("five").addEventListener("click", randomiseButton);
  document.getElementById("six").addEventListener("click", randomiseButton);
  document.getElementById("seven").addEventListener("click", randomiseButton);
  document.getElementById("eight").addEventListener("click", randomiseButton);
  document.getElementById("nine").addEventListener("click", randomiseButton);
  document.getElementById("ten").addEventListener("click", randomiseButton);
  document.getElementById("eleven").addEventListener("click", randomiseButton);
  document.getElementById("twelve").addEventListener("click", randomiseButton);
}

// Want a div which counts how many clicks we have done

function randomiseButton() {
  var id = event.target.id;
  document.getElementById(id).style.backgroundColor = randomRGB();
  document.getElementById(id).style.color = randomRGB();
  document.getElementById(id).style.fontSize = randomFontSize();
  document.getElementById(id).style.margin = randomMarginPadding();
  document.getElementById(id).style.padding = randomMarginPadding();
  document.getElementById(id).style.width = randomWidth();
  document.getElementById(id).style.borderRadius = randomBorderRadius();
  document.body.style.backgroundColor = randomRGB();
  totalClicks++;
  totalHtml[0].innerHTML = "You have clicked " + totalClicks + " times.";
  playRandomAudio();
}

function randomRGB(){
  var colOne = Math.round(Math.random() * 255);
  var colTwo =  Math.round(Math.random() * 255);
  var colThree =  Math.round(Math.random() * 255);
  return "rgb("+ colOne +","+ colTwo+","+colThree+")";
}

function randomFontSize() {
  return Math.round(Math.random() * 200) + "%";
}

function randomMarginPadding() {
  return Math.round(Math.random() * 25) + "%";
}

function randomBorderRadius() {
  return Math.round(Math.random() * 50) + "px";
}
function randomWidth() {
  return Math.round(Math.random() * 300) + "px";
}

function playRandomAudio() {
  var fileToPlay = Math.floor(Math.random() * 11) + 1  ;
  var audio = document.getElementsByTagName("audio")[fileToPlay];
  audio.play();
}
