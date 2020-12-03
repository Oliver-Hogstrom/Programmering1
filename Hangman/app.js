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
// 5. Skapa villkor för om användaren vinner eller när användaren har slut på gissningar aka dödat mannen

// Vad som alltid ska skrivas ut: Skriv ut vilka bokstäver som användaren har gissat på

// När jag byggt klart spelet, implementera att måla ut gubben i konsollen, eller bind ihop spelet med en .HTML

// Let the games begin 

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let rightGuesses = []
let wrongGuesses = []

// This section is purly to give the instructions to the player about how the games is going to be played
function intruductionToPlayer() {
    console.log("Hello and welcome to Hangman")
    console.log("You will be givinh a random word and u have to guess that word")
    console.log("You will be givien 7 wrong guesses before the man is hanged")
    console.log("U have to guess in all lowercase characters, one character at a time.")
    console.log("GL HF")
}

// This section will be dedicated to the words that will be randomized from a array of different words
// I have a array with words i have written myself and a random function to randomize the words in the array



let hangmanWords = ['discord', 'programming', 'server', 'node', 'wallah']

function randomWords() {
    
    let randomHangmanWords = hangmanWords[Math.floor(hangmanWords.length * Math.random())]

    let splittedWord = randomHangmanWords.split('')
    console.log(splittedWord);
}

// Now we need to ask the player to guess and compere the guesses with the splitted random word.
function playerGuess() {
    const wrongTries = 7

    if (wrongTries === 0) {
        console.log("You have lost the game...");
        console.log("The right word was " + randomHangmanWords);
    }
    else if(guess == splittedWord){
        
    }
}

// This is to write the correct guesses

rl.on('line', (input) => {  
    
})