// HANGMAN

// 1. Ge användaren instruktioner om hur spelet ska gå till med console.log()
// 2. Slumpa ett ord från en lista som användaren ska gissa på med en random funktion()
//     2.1 Slumpa eller be användaren att skriva in ett eget ord som andra ska gissa på (Optional)
//     2.1 be användare att skriva in ett ord i listan med random ord, en push till listan.
// 3. Be användaren gissa 7 gånger på en bokstav åt gången
//     3.1 Skapa en loop (While eller for) för att behålla spelarens gissnigs process till dem antingen inte har några gissningar kvar eller har gissat rätt ord.
//     3.2 Skapa villkor ifall användaren gissar med ett tal eller flera bokstäver i loopen.
// 4. Spara användarens gissningar och skriv ut dem i console i den ordning som orden finns i orden
//      4.1 skriv även ut i en console log hur många fel gissningar som spelaren har kvar efter varje gissnins.
// 5. Skapa en funktion med en for loop i som kommer att jämföra det slumpade ordet med användarens gissningar. Alltså ska loopen gå igenom randomordet och se om användarens
//      gissning finns i ordet eller inte.
// 6. Skapa villkor för om användaren vinner eller när användaren har slut på gissningar aka dödat mannen

// Vad som alltid ska skrivas ut: Skriv ut vilka bokstäver som användaren har gissat på

// När jag byggt klart spelet, implementera att måla ut gubben i konsollen, eller bind ihop spelet med en .HTML

// Let the games begin 

// För att kunna köra detta programmet använder jag Readline

const {
    log
} = require('console');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Denna variabel definerar hur många felaktiga gissningar som avnändaren har

let wrongTries = 7

// Dessa listor kommer att bestå av felaktiga gissningar samt "Final" som kommer ingå med mitt random ord

const wrongGuesses = []
const final = []

// This section is purly to give the instructions to the player about how the games is going to be played
function intruductionToPlayer() {
    console.log("Hello and welcome to Hangman")
    console.log("You will be givinh a random word and u have to guess that word")
    console.log("You will be givien 7 wrong guesses before the man is hanged")
    console.log("U have to guess in all lowercase characters, one character at a time.")
    console.log("GL HF")
}

// This is a function for a basic setup with some other funcitons such as the consol.log with the instructions to the player

function setUpGame() {
    intruductionToPlayer()
    wrongTries = 7
    randomWords()
}

// This is the array with all the words for the game

const hangmanWords = ['discord', 'programming', 'server', 'node', 'wallah', 'computer', 'keyboard', 'monitor', 'javascript']

var randomWord = ''

// This funciton writes out the randomWord with underscores and as the user guesses it changes into the correct characters

function finalRandomWord() {
    for (let i = 0; i < randomWord.length; i++) {
        final.push('_')
    }
    console.log(final.join(' '));
}

// randomWords if the function that randomizes the word the player gets to guess at.

function randomWords() {
    final.splice(0, final.length)
    randomWord = (hangmanWords[Math.floor(hangmanWords.length * Math.random())])
    finalRandomWord()
    console.log(randomWord);

}

// This is the function that lets the user guess and determine if the user guesses rigth or wrong. As well as a for loop to cycle through the random word and see if "guess" is 1 charachter long
// The function also handles if the player guesses the whole word in one go
// it writes out all the wrong guesses that the player has made by pushing the wrong guess to an empty array.

function playerGuess(guess) {
    if (wrongTries === 0) {
        console.log('You have lost the game...');
    } else if (guess.length == 1) {
        let temp = false
        for (let g = 0; g < randomWord.length; g++) {
            if (guess === randomWord[g]) {
                final[g] = guess
                temp = true
            }
        }

        if (!temp) {
            wrongTries--
            console.log('Nice try but the guess was wrong, please guess again.');
            console.log('U have: ' + wrongTries + ' left');
            wrongGuesses.push(guess)
            console.log('You have gussed on: ' + wrongGuesses);
        } else {
            console.log('You have guessed a correct charachter, wohoo');
            console.log('U have: ' + wrongTries + ' left');
            console.log('You have gussed on: ' + wrongGuesses);
        }
    } else if (guess === randomWord) {
        console.log('U guessed on the whole word, AND YOU HAVE WON!!!');
    } else if (guess !== randomWord) {
        wrongTries--
        console.log('U guessed on the whole word and it is wrong, guess again');
        console.log('U have: ' + wrongTries + ' left');
    }
    if (final.join('') == randomWord) {
        console.log('CONGRATS, YOU HAVE WON');
        console.log(final.join(''));
    }
    console.log(final.join(' '));
}

// This function is for asking the player if they want to play again or not

function playAgain() {
    if (final.join('') == randomWord){
        console.log('Do you want to play again?');
        console.log('y/n');
    }
}

setUpGame()

rl.on('line', (guess) => {
    playerGuess(guess) 
})