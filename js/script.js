//SELECT ELEMENTS & ADD PLACEHOLDERS

// 1. Create Global Variables

//Players guessed letters ul
const guessedLettersArea = document.querySelector('.guessed-letters');
//Guess Button
const guessBtn = document.querySelector('.guess');
//Player letter guess input
const letterInput = document.querySelector('.letter');
//Letter reveal progress
const wordProgress = document.querySelector('.word-in-progress');
//Guesses remaining
const guessesLeft = document.querySelector('span');
//Message
const message = document.querySelector('.message');

//Test word
const word = 'magnolia';
// 6. Add a New Global Variable for Player Guesses
const guessedLetters = [];

// 2.Write a Function to Add Placeholders for Each Letter
const hiddenWord = function (word) {
    const hiddenWordLetters = [];
//Breakbown word into hidden letters    
    for (const letter of word) {
        console.log(letter);
        hiddenWordLetters.push('●');
    }
    wordProgress.innerText = hiddenWordLetters.join('');
    //console.log(hiddenWordLetters);
};

hiddenWord(word);

// 3. Add an Event Listener for the Button
guessBtn.addEventListener('click', function (e) {
//Prevent the default behavior of clicking a button    
    e.preventDefault();
//Empty message paragraph
    message.innerText = '';
//Log player's guess
    const playerGuess = letterInput.value;
//Validate single letter
// 5. Validate Input in the Button Event Handler
    const niceTry = validateInput(playerGuess);
    console.log(playerGuess);
    if (niceTry) {
        makeGuess(playerGuess);
    }
    letterInput.value = '';

});

//ACCEPT & VALIDATE PLAYER GUESSES

// 4. Create a Function to check Player’s Input
const validateInput = function (input) {
//Regular Ex: limits what characteris entered
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
    //Empty input
        message.innerText = 'Please enter a letter';
    } else if (input.length > 1) {
    //More than one letter entered
        message.innerText = 'Please enter a single letter.';    
    } else if (!input.match(acceptedLetter)) {
    //Character does not match accepted letter
        message.innerText ='Please enter a letter from A to Z.';
    } else {
    //Single letter entered 
     return input;   
    }
};

// 7. Create a Function to Capture Input
const makeGuess = function (playerGuess) {
    playerGuess = playerGuess.toUpperCase();
    if (guessedLetters.includes(playerGuess)) {
        message.innerText = "You've tried that letter already. Please try again.";
    } else {
        guessedLetters.push(playerGuess);
        console.log(guessedLetters);
    }
    
};