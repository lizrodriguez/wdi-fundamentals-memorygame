/*console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

function createCards(){
var gameBoard = document.getElementById("game-board");  

	for (var i = 0; i < cards.length; i++) {
		var div = document.createElement('div');
   		div.className = "card";
		div.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
    	div.addEventListener('click', isTwoCards);
		gameBoard.appendChild(div);
	}
}
/*old for loop
for(var i=0; i<4; i++){
   var div = document.createElement('div');
   div.className="card";
   gameBoard.appendChild(div);
   }
*/
function isTwoCards(){
  // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card')); //show card image
  console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png'>"; //queen
	}
  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}

var isMatch = function(cards){
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
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
