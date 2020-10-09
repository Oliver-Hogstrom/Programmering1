const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// 1. Skriv in in 4 tal, varav 2 är dice 1 och de andra 2 är dice 2
rl.question("Write the span of the dices: "), (answer) =>{
    // skapa variabler för avr 1 och avrage 2

    let splitAnswer = answer.spilt('')
    let dice1 = splitAnswer [0,1]
    let dice2 = splitAnswer [2,3]
    console.log(dice1 )

    rl.close()
}