// set variables (wins, remaining guesses, letters guessed )
var guess = 12;
var wins = 0;
var letters = [];
var blanks = [];
var wrongs = [];
var dash = "-";
var allWords = ["kerfuffle",
    "hullaballoo",
    "cacophony",
    "ragamuffin",
    "whippersnapper",
    "gobbledygook",
    "gibberish",
    "poppycock",
    "discombobulate",
    "flummox",
    "curmudgeon",
    "lackadaisical",
    "woebegone",
    "lollygag",
    "frankenfood",
    "cattywampus",
    "dipthong",
    "nincompoop",
    "malarkey",
    "numbskull",
    // and some tough hangman words, just for fun.
    "buzz",
    "jazz",
    "jinx",
    "wavy",
    "zigzag",
    "voodoo",
    "klutz",
    "haphazard",
    "stymied",
    "gnarly",
    "crypt",
    "blitz",
    "xylophone"
];
var word;
var wordArray;
//set an if loop based on number of guesses remaining

//provide a list of hangman words to be guessed
function reset() {
    letters = [];
    wrongs = [];
    blanks = [];
    document.getElementById("guessLetter").innerHTML = "";
    //utilize random number generator to select one of the words
    word = allWords[Math.floor(Math.random() * allWords.length)];
    //split the chosen hangman word into an array of letters
    wordArray = word.split("");
    //for loop to push "-"" into the blanks array until the length matches the length of variable word
    for (i = 0; i < wordArray.length; i++) {
        blanks.push(dash);
    }
    document.getElementById("hangman").innerHTML = blanks.join("");
    document.getElementById("guessNumber").innerHTML = guess;
};
document.onkeypress = function(event) {
    if (guess > 0) {
        if (event.keyCode > 96 && event.keyCode < 123) {
            var letter = event.key;
            //check if the letter is in the word
            if (wordArray.indexOf(letter) === -1) {
                //if the letter is already in wrongs, don't add to wrongs or reduce guesses
                if (wrongs.indexOf(letter) === -1) {
                    //if letter isn't in word and not already guessed, display in the letters already guessed section
                    wrongs.push(letter);
                    guess = guess - 1;
                    document.getElementById("guessLetter").innerHTML = wrongs.join("");
                    document.getElementById("guessNumber").innerHTML = guess;
                }
            }
            //if the letter is in the word, replace the blank with the correct letter guessed
            else {
                for (j = 0; j < word.length; j++) {
                    if (letter === word[j]) {
                        blanks[j] = letter;
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
    } else {
        guess = 12;
        reset();

    }
};
reset();