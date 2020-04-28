function randomNumber(){
  return Math.floor(Math.random()*6)+1;
}


var randomNumber1 = randomNumber();

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");