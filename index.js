/** @format */
// detecting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animationButton(event.key);
});

//detecting button press
var drumlength = document.querySelectorAll(".drum").length;
for (var i = 0; i <= drumlength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", house);

  function house() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    animationButton(buttonInnerHtml);
  }
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      document.querySelector("#title").innerHTML = "Game over😡";
      document.querySelector("body").classList.add("game-over");
      setTimeout(function () {
        document.querySelector("#title").innerHTML = "Drum 🥁 Kit";
        document.querySelector("body").classList.remove("game-over");
      }, 1000);
  }
}

//Animation of buttons
function animationButton(currentKey) {
  var actionButton = document.querySelector("." + currentKey);
  actionButton.classList.add("pressed");
  setTimeout(function () {
    actionButton.classList.remove("pressed");
  }, 100);
}

// for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", home);

//   function home() {
//     this.style.color = "white";
//   }
// }

//var audio = new Audio("location of audio");
//audio.play();
