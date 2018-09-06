console.log("connected");
//Array to choose from
var wordList = ["Snickers", "Crunch", "Reeces", "Musketeers", "Twix"]

//Computer solution
var chosenWord = "";

//Breaks the solution into individual letters

var lettersInChosenWord = [];

//Number of blanks in the solution (when the word is solved there are no blanks left)

var numBlanks = 0;

//Holds a mix of blanks and solved letters through the guessing process ("n _ _ e _")
var blanksAndSuccesses = [];

//Holds all of the wrong guesses

var wrongGuesses = [];

//Holds the letters guessed

var letterGuessed = "";

//Game Counters 
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

//Functions
//==========================

//startGame() label first

function startGame() {

    //Reset the guesses back to 0

    numGuesses = 9;

    //Choose the word from the array "wordList"
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

    //The word is broken into individual letters so we mush use the ".split" function

    lettersInChosenWord = chosenWord.split("");

    //We can print the word chosen in the console
    console.log(chosenWord);


    //Everytime we start the game we reset the gusses and successes counter
    blanksAndSuccesses = [];

    //We also need to reset the wrong guesses from the previous round
    wrongGuesses = [];

    //Fill up the blanksAndSuccesses list with the appropariate number of blanks
    //Have the spaces equal the letters in the word it chooses 
    for (var i = 0; i < numBlanks; i++); {
        blanksAndSuccesses.push("_");
    }

    //Print the blanks in the console bc why not?
    console.log(blanksAndSuccesses);

    //Reprints the guessesLeft to 9
    //We must connect our index.html id's to the vars in java
    document.getElementById("guesses-left").innerHTML = numGuesses;

    //Prints the blanks at the beginning of each round in the HTML
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    //Clears the wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

//checkLetters() function
//We will be making all of the comparisons to the chosen words here

function checkLetters(letter) {

    //This boolean will be toggled based on whether or not
    //a letter is found anywhere in the word

    var letterInWord = false;

    //Check if letter exists in the array at all
    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] === letter) {

            //If the letter exists then toggle the boolean to true

            letterInWord = true;
        }

    }

    //If the letter exists somewhere in the word,
    //then figure out exactly where (which indices)

    if (letterinWord) {

        //loop through it
        for (var j = 0; j < numBlanks; j++) {

            //Populate blanks and successes with ebery instance the letter matches
            if (chosenWord[j] === letter) {

                blanksAndSuccesses[j] = letter;
            }

        }
    }

    //If the letter doesn't exist at all..
    else {

        //Add letter to list of wrong letters
        wrongGuesses.push(letter);

        //We also subtract one of the guesses
        numbGuesses--;

    }



}




