// set variables (wins, remaining guesses, letters guessed )
var guess = 12;
var wins = 0;
var letters = [];
var blanks = [];
var wrongs = [];
var dash = "-";
//set an if loop based on number of guesses remaining
if (guess > 0) {
    //provide a list of hangman words to be guessed
    var allWords = ["ryan", "jon", "parks", "katie", "nicole", "johnson"];
    //utilize random number generator to select one of the words
    var word = allWords[Math.floor(Math.random() * allWords.length)];
    //split the chosen hangman word into an array of letters
    var wordArray = word.split("");
    //set a variable for the number of letters in the chosen hangman word
    var numLetters = wordArray.length;
    //for loop to push "-"" into the blanks array until the length matches the length of variable word
    for (i = 0; i < numLetters; i++) {
        blanks.push(dash);
    }
    document.getElementById("hangman").innerHTML = blanks.join("");
    document.getElementById("guessNumber").innerHTML = guess;
    console.log(word);
    console.log(wordArray);
    console.log(numLetters);
    console.log(blanks);
    console.log(wrongs);
    document.onkeypress = function(event) {
        if (event.keyCode > 96 && event.keyCode < 123) {
            console.log(event);
            var letter = event.key;
            //check if the letter is in the word
            if (wordArray.indexOf(letter) === -1) {
                //if the letter is already in wrongs, don't add to wrongs or reduce guesses
                if (wrongs.indexOf(letter) === -1) {
                    //if letter isn't in word and not already guessed, display in the letters already guessed section
                    wrongs.push(letter);
                    console.log(wrongs);
                    guess = guess - 1;
                    console.log(guess);
                    document.getElementById("guessLetter").innerHTML = wrongs.join("");
                    document.getElementById("guessNumber").innerHTML = guess;
                }
            }
            //replace the blank with the correct letter guessed
            else {
                for (j = 0; j < word.length; j++) {
                    if (letter === word[j]) {
                        blanks[j] = letter;
                        console.log(blanks);
                        document.getElementById("hangman").innerHTML = blanks.join("");
                        document.getElementById("guessNumber").innerHTML = guess;
                    }
                }
            }
        };
        if (word === blanks.join("")) {
            wins = wins + 1;
            document.getElementById("winNumber").innerHTML = `${wins}`;
            guess = 0;
            blanks = [];
        }
    }
} else {
    document.getElementById("winNumber").innerHTML = `${wins}`;
    guess = 12;
}