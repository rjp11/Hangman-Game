// set variables (wins, remaining guesses, letters guessed )

		var guess = 12;
		var wins = 0;
		var letters = [];
		var blanks = [];
		var wrongs = [];

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
		
		console.log(word);
		console.log(wordArray);
		console.log(numLetters);
		console.log(blanks);
		console.log(wrongs);

		//set an if loop based on number of guesses remaining
		if (guess > 0) {
			//log the letter guessed
			document.onkeyup = function(event){
			var letter = event.key;

			//check if the letter is in the word
			if (wordArray.indexOf("letter") === -1){

			}

			//replace the blank with the correct letter guessed

			else {


			}


		};


		}

		else {

		}

		//display the blanks for the letters of the chosen words


		

		//if not, display in the letters already guessed section
		//document.getElementByID("game").innerHTML = ' <h6> Letters already guessed: ${wrongs} '
