function randomNumber(){
  return Math.floor(Math.random()*6)+1;
}

function whoWin(number1, number2){
  if(number1 > number2){
    document.querySelector("h1").innerText = "🚩 Player 1 wins!";
  }
  else if(number1 < number2){
    document.querySelector("h1").innerText = "Player 2 wins! 🚩";
  }
  else{
    document.querySelector("h1").innerText = "🚩 Draw 🚩";
  }
}

function displayH2(){
  document.querySelector("h2").style.visibility = "visible";
}

//Set random value to img1
var randomNumber1 = randomNumber();

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//Set random value to img2
var randomNumber2 = randomNumber();

document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

whoWin(randomNumber1, randomNumber2);
displayH2();
