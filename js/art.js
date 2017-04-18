// Need event listeners on all buttons
document.onload = initialiseButtons();

function initialiseButtons() {
  document.getElementById("one").addEventListener("click", changeBackgroundColour);
  document.getElementById("two").addEventListener("click", changeBackgroundColour);
  document.getElementById("three").addEventListener("click", changeBackgroundColour);
  document.getElementById("four").addEventListener("click", changeBackgroundColour);
  document.getElementById("five").addEventListener("click", changeBackgroundColour);
  document.getElementById("six").addEventListener("click", changeBackgroundColour);
  document.getElementById("seven").addEventListener("click", changeBackgroundColour);
  document.getElementById("eight").addEventListener("click", changeBackgroundColour);
  document.getElementById("nine").addEventListener("click", changeBackgroundColour);
  document.getElementById("ten").addEventListener("click", changeBackgroundColour);
  document.getElementById("eleven").addEventListener("click", changeBackgroundColour);
  document.getElementById("twelve").addEventListener("click", changeBackgroundColour);
}



function changeBackgroundColour() {
  var id = event.target.id;
  document.getElementById(id).style.backgroundColor = randomRGB();
  document.getElementById(id).style.color = randomRGB();
  document.body.style.backgroundColor = randomRGB();
}

function randomRGB(){
  var colOne = Math.round(Math.random() * 255);
  var colTwo =  Math.round(Math.random() * 255);
  var colThree =  Math.round(Math.random() * 255);
  return "rgb("+ colOne +","+ colTwo+","+colThree+")";
}
