// HANGMAN
// 1. Ge användaren instruktioner om hur spelet ska gå till
// 2. Slumpa ett ord från en lista som användaren ska gissa på
//     2.1 Slumpa eller be användaren att skriva in ett eget ord som andra ska gissa på (Optional)
// 3. Be användaren gissa på en bokstav åt gången
//     3.1 förbered koden för fails dvs siffror eller fler än en bokstav.
// 4. Spara användarens gissningar och skriv ut dem i console.
// 5. Gratulera användaren för att den klarat spelet eller be dem be om ursäkt för dem dödat en man :)

// Let the games begin

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

