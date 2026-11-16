var randomnumgen1 = Math.floor(Math.random() * 6) + 1;

var srcnew = "./images/dice" + randomnumgen1 + ".png";

var imagelements = document.querySelectorAll("img");

imagelements[0].setAttribute("src", srcnew);

var randomnumgen2 = Math.floor(Math.random() * 6) + 1;

var srcnew2 = "./images/dice" + randomnumgen2 + ".png";

imagelements[1].setAttribute("src", srcnew2);

if (randomnumgen1 > randomnumgen2) {
  var message = document.querySelector("h1");
  message.innerHTML = "Player 1 Wins !!!!";
}
if (randomnumgen1 < randomnumgen2) {
  var message = document.querySelector("h1");
  message.innerHTML = "Player 2 Wins !!!!";
}
if (randomnumgen1 == randomnumgen2) {
  var message = document.querySelector("h1");
  message.innerHTML = "Draw!!!";
}
