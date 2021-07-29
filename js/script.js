// 1. Create Global Variables

//Players guessed letters ul
const guessedLetters = document.querySelector('.guessed-letters');
//console.log(guessedLetters);
//Guess Button
const guessBtn = document.querySelector('.guess');
//console.log(guessBtn);
//Player letter guess input
const letterInput = document.querySelector('.letter');
//console.log(letterInput);
//Letter reveal progress
const wordProgress = document.querySelector('.word-in-progress');
// console.log(wordProgress);
//Guesses remaining
const guessesLeft = document.querySelector('span');
//console.log(guesses);
//Message
const message = document.querySelector('.message');
//console.log(message);
//Test word
const word = 'magnolia';
//console.log(word);

// 2.Write a Function to Add Placeholders for Each Letter
const hiddenWord = function (word) {
    const hiddenWordLetters = [];
//Breakbown word into hidden letters    
    for (const letter of word) {
        console.log(letter);
        hiddenWordLetters.push('●');
      }
    wordProgress.innerText = hiddenWordLetters.join('');
    console.log(hiddenWordLetters);
};
hiddenWord(word);

// 3. Add an Event Listener for the Button
guessBtn.addEventListener('click', function (e) {
//Prevent the default behavior of clicking a button    
    e.preventDefault();
//Log player's guess
    const playerGuess = letterInput.value;
    console.log(playerGuess);
    letterInput.value = '';
});