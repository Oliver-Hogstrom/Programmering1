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

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let wrongTries = 7

const rightGuesses = []
const wrongGuesses = []

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

// This section will be dedicated to the words that will be randomized from a array of different words
// I have a array with words i have written myself and a random function to randomize the words in the array


const hangmanWords = ['discord', 'programming', 'server', 'node', 'wallah']

const randomHangmanWords = []

function randomWords() {
    randomHangmanWords = hangmanWords[Math.floor(hangmanWords.length * Math.random())]
}

// This will be a loop to compare the randomHangmanWords with the guesses the player makes

function compareRandomWordWithGuess(guess, rightGuesses, wrongGuesses, randomHangmanWords) {
    for (let i = 0; i < randomHangmanWords.length; i++) {
        if (randomHangmanWords[i] !== guess) {
            wrongGuesses.push(guess)
        }
        else if(randomHangmanWords[i] == guess){
            rightGuesses.push(guess)
        }
    }
}

// Now we need to ask the player to guess and compere the guesses with the splitted random word.
function playerGuess(guess) {

        if (wrongTries === 0) {
            console.log("You have lost the game...");
            console.log("The right word was " + randomHangmanWords);
            process.exit()
        }
        else if(guess == randomHangmanWords){
            console.log('Congrats, one right guess')
            console.log('Right guesses are: ' + rightGuesses);
            console.log('Wrong guesses are :' + wrongGuesses);
            console.log('U have ' + wrongTries + ' left');
        }
        else if (guess != randomHangmanWords){
            wrongTries--
            console.log('Nice try but it was wrong');  
            console.log('Right guesses are: ' + rightGuesses);
            console.log('Wrong guesses are :' + wrongGuesses);
            console.log('U have ' + wrongTries + ' left');
        }
        if(rightGuesses == randomHangmanWords){
            console.log('Congratulations you have won. Fell good about yourself for not hanging the poor man')
            process.exit()
        }
    }

setUpGame()

rl.on('line', (guess) => {
    playerGuess(guess)
})