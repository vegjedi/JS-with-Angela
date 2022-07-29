function randomDicee() {
    var output = Math.floor(Math.random() * 6 +1);
    return output;
  }

document.querySelector(".img1").setAttribute("src", "images/dice"+randomDicee()+".png")
document.querySelector(".img2").setAttribute("src", "images/dice"+randomDicee()+".png")