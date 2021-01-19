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

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Denna variabel definerar hur många felaktiga gissningar som avnändaren har

let wrongTries = 7

// Dessa listor kommer att bestå av rätta gissningar samt felaktiga gissningar

const rightGuesses = []
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

function setUpGame() {
    intruductionToPlayer()
    wrongTries = 7
    randomWords()
}

const hangmanWords = ['discord', 'programming', 'server', 'node', 'wallah']

const randomHangmanWords = []

function randomWords() {
    randomHangmanWords.push(hangmanWords[Math.floor(hangmanWords.length * Math.random())])
}

function finalRandomWord(randomHangmanWords) {
    // Gör om denna funktion med loopar som kommer behandla användarens gissningar och
    for (let i = 0; i < randomHangmanWords.length; i++) {
        final.push('_')
    }
    // console.log(final.join(''));
}

function playerGuess(guess) {

    finalRandomWord(randomHangmanWords)

   if (wrongTries === 0) {
       console.log('You have lost the game...');
   }
   else if (guess.length === 1) {
        for (let g = 0; g < randomHangmanWords.length; g++) {
            if (randomHangmanWords[g] === guess) {
                final[g] = guess
            }
        }
        console.log('You have: ', wrongTries, ' left');
        console.log('Good job, you managed to guess a charachter right, keep it up.');
   }
   else if ()
}

setUpGame()

rl.on('line', (guess) => {
    playerGuess(guess)
})