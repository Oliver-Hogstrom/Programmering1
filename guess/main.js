const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let random = Math.round(Math.random() * 10) + 1

let tries = 8

console.log("You have to guess the right number, it's a number between 1-10 and you have:", tries, "tries")

rl.on('line', (input) => {
    let ans = Number(input)
    tries--;

    if (tries === 0) {
        console.log("You're out of tries m8 :(")
        console.log("The number was: ", random);
        process.exit();
    } else if (random == ans) {

        console.log("Congrats, you've won!");
        process.exit();
    } else if (random > ans) {
        console.log("You have ", tries, " tries left");
        console.log("You have to guess higher mate!");
    } else if (random < ans) {
        console.log("You have ", tries, "tries left");
        console.log("You have to guess lower mate!");
    }
})