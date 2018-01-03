//setting variables for a loop//
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

	var wins = 0;
	var losses = 0;
	var guesses = 9;
	var listGuess = "";
	var randomNumber = getRandomIntInclusive(0, 25);
	var computerChoice = letters[randomNumber];
	console.log(computerChoice);

document.onkeyup = function(event) {
	
	var userGuess = event.key;
	if(guesses === 9)
	{
		listGuess = userGuess;
	}
	else
	{
		listGuess = listGuess + "," + userGuess;
	}

	if(userGuess === computerChoice) 
	{
		wins++;
	} 
	else
	{
		guesses--;
	}

	if(guesses === 0)
	{
		losses++;
		guesses = 9;
		alert("Be Better!");
	}
	

	document.getElementsByClassName('guesslist')[0].innerHTML = listGuess;

	document.getElementsByClassName('guesses')[0].innerHTML = guesses;
	document.getElementsByClassName('wins')[0].innerHTML = wins;
	document.getElementsByClassName('losses')[0].innerHTML = losses;

}

document.getElementsByClassName('guesses')[0].innerHTML = guesses;
document.getElementsByClassName('wins')[0].innerHTML = wins;
document.getElementsByClassName('losses')[0].innerHTML = losses;
