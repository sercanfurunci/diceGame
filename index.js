if (window.performance.navigation.type === 1) {
   // if the page has been refreshed, call the rollDice() function.
  rollDice();
}

function rollDice(){
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var images1 = "dice"+ randomNumber1 +".png";
var images2 = "dice"+ randomNumber2 +".png";

document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);
changeTitle(randomNumber1, randomNumber2);
}

function changeTitle(randomNumber1, randomNumber2){
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "📢Player 1 wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!📢";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
}
