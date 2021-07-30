// 1. SELECT ELEMENTS & ADD PLACEHOLDERS

// 1.1 Create Global Variables

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
// 2.3 Add a New Global Variable for Player Guesses
const guessedLetters = [];

// 1.2 Write a Function to Add Placeholders for Each Letter
const hiddenWord = function (word) {
    const hiddenWordLetters = [];
    //Breakbown word into hidden letters    
    for (const letter of word) {
        //console.log(letter);
        hiddenWordLetters.push('●');
    }
    wordProgress.innerText = hiddenWordLetters.join('');
    //console.log(hiddenWordLetters);
};

hiddenWord(word);

// 1.3 Add an Event Listener for the Button
guessBtn.addEventListener('click', function (e) {
    //Prevent the default behavior of clicking a button    
    e.preventDefault();
// 2.2a Empty message paragraph
    message.innerText = '';
    //Log player's guess
    const playerGuess = letterInput.value;
// 2.2 Validate Input in the Button Event Handler
    //Validate single letter
    const niceTry = validateInput(playerGuess);
    console.log(playerGuess);
// 2.4a Confirms that player input is returning a letter    
    if (niceTry) {
        makeGuess(playerGuess);
    }
    letterInput.value = '';

});

// 2. ACCEPT & VALIDATE PLAYER GUESSES

// 2.1 Create a Function to Check Player’s Input
const validateInput = function (input) {
    //Regular Ex: limits what character is excepted
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

// 2.4 Create a Function to Capture Input
const makeGuess = function (playerGuess) {
    playerGuess = playerGuess.toUpperCase();
    //Checks if the player already guessed the same letter
    if (guessedLetters.includes(playerGuess)) {
        message.innerText = "You've tried that letter already. Please try again.";
    } else {
    //Logs already guessed letters to the designated empty array
        guessedLetters.push(playerGuess);
        console.log(guessedLetters);
// 3.1a Shows letters already guessed    
        showGuessedLetters();
// 3.2a Shows letter if correct
        wordProgressUpdate(guessedLetters);        
    }
    
};

// 3. DISPLAY WORD & GUESSED LETTERS

// 3.1 Create a Function to Show the Guessed Letters
const showGuessedLetters = () => {
//Clear guessed letters area/box    
    guessedLettersArea.innerHTML = '';
//Creates a placement for each letter guessed
    for (const letter of guessedLetters) {
        const li = document.createElement('li');
        li.innerText = letter;
        guessedLettersArea.append(li);
    }               
};

// 3.2 Create a Function to Update the Word in Progress
//Replaces symbol if correct letter is guessed
const wordProgressUpdate = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split('');
//Holds the answer
    const showAnswer =[];

    for (const letter of wordArray) {
//Checks if any of the guessed letters are a part of the answer
        if (guessedLetters.includes(letter)) {
//Removes symbol if guessed letter is correct            
            showAnswer.push(letter.toUpperCase());
        } else {
            showAnswer.push('●');
        }
    }
    //console.log(showAnswer);
    wordProgress.innerText = showAnswer.join('');
    playerWon();
};

// 3.3 Create a Function to Check If the Player Won
//Check if word matches word in progress
const playerWon = function () {
    if (wordProgress.innerText === word.toUpperCase()) {
        message.classList.add('win');
//Congratulations message        
        message.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';
    }
};
