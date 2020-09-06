const navbar = document.getElementById("nav");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");


window.onscroll = function(){
  if (window.pageYOffset > 80) {
    navbar.style.background = "white";
    one.style.color = "grey";
    two.style.color = "grey";
    three.style.color = "grey";
    four.style.color = "grey";
    five.style.color = "grey";
    six.style.color = "grey";
  }
  else {
    navbar.style.background = "transparent";
    one.style.color = "white";
    two.style.color = "white";
    three.style.color = "white";
    four.style.color = "white";
    five.style.color = "white";
    six.style.color = "white";
  }
}
