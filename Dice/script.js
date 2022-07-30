function randomDicee() {
  var output = Math.floor(Math.random() * 6 +1);
  return output;
}

var player1 = randomDicee();
var player2 = randomDicee();

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
  } else if (player1 === player2) {
  document.querySelector("h1").innerHTML = "Big Draw!!!";
  } else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

document.querySelector(".img1").setAttribute("src", "images/dice"+ player1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ player2 + ".png");