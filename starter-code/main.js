/*console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/

var createCards = function(){
var gameBoard = document.getElementById("game-board");    

for(var i=0; i<4; i++){
   var div = document.createElement('div');
   div.className="card";
   gameBoard.appendChild(div);
   }//why don't we need to reference [i]?
}
createCards();

/*if ((cardOne && cardTwo === "queen") || (cardThree && cardFour === "king")){
  alert('You found a match!');
} else {
  alert('Sorry, try again.');
}

//second try for If stmt
if (cardOne === cardTwo) {
	alert('You found a match!');	
}else if (cardThree === cardFour) {
	alert('You found a match!');	
}else {
	alert('Sorry, try again.');
}*/
