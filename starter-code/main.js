console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


/*if ((cardOne && cardTwo === "queen") || (cardThree && cardFour === "king")){
  alert('You found a match!');
} else {
  alert('Sorry, try again.');
}*/


if (cardOne === cardTwo) {
	alert('You found a match!');	
}else if (cardThree === cardFour) {
	alert('You found a match!');	
}else {
	alert('Sorry, try again.');
}