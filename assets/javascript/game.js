// set variables (wins, remaining guesses, letters guessed )
var guess = 12;
var wins = 0;
var letters = [];
var blanks = [];
var wrongs = [];



//set an if loop based on number of guesses remaining
if (guess > 0) {
//log the letter guessed

//provide a list of hangman words to be guessed
var allWords = [ "ryan", "jon", "parks", "katie", "nicole", "johnson"];

//utilize random number generator to select one of the words
var word = allWords[Math.floor(Math.random() * allWords.length)];
//split the chosen hangman word into an array of letters
var wordArray = word.split("");
//set a variable for the number of letters in the chosen hangman word
var numLetters = wordArray.length;
		
//for loop to push "-"" into the blanks array until the length matches the length of variable word
for (i=0; i < numLetters; i++){
	blanks.push("-")
}

document.getElementById("hangman").innerHTML = blanks.join("");
document.getElementById("guessNumber").innerHTML = guess;
		
console.log(word);
console.log(wordArray);
console.log(numLetters);
console.log(blanks);
console.log(wrongs);
	document.onkeyup = function(event){
		console.log(event);
		var letter = event.key;


		//check if the letter is in the word
		if (wordArray.indexOf(event.key) === "-1"){

		//if not, display in the letters already guessed section
		//document.getElementByID("game").innerHTML = ' <h6> Letters already guessed: ${wrongs} '
			wrongs.push(letter);
			console.log(wrongs);
			guess --;
			console.log(guess);

			document.getElementByID("guessLetter").innerHTML = wrongs.join("");
			document.getElementById("guessNumber").innerHTML = guess;
			//if the letter is already in wrongs, don't add to wrongs or reduce guesses


		}

		//replace the blank with the correct letter guessed

		else {
			for (j=0; j < word.length; j++){
				if (letter === word[j]) {
					blanks[j] = letter;
					console.log(blanks);
					document.getElementById("hangman").innerHTML = blanks.join("");
				}
			}


		}


		};


		}

else {

}


		

		
