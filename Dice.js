
randomNumber1 = Math.floor(( Math.random() * 6 )) + 1;

  document.querySelector(".left-dice img").setAttribute("src" , "./images/dice"+randomNumber1+".png");



randomNumber2 = Math.floor(( Math.random() * 6 )) + 1;

  document.querySelector(".right-dice img").setAttribute("src" , "./images/dice"+randomNumber2+".png");



if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩player 1 wins!" ;
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "player 2 wins!🚩" ;
}
else {
  document.querySelector("h1").innerHTML = "Draw!😶" ;
}


