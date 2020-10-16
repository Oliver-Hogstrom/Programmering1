const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const lines = []

function random(min, max){
    return Math.floor(Math.random() * (max-min+1) ) +min
}

function code(){
    
    
}
console.log('You have 5 guesses in total: ');
rl.on('line', (input) => {
    lines.push(input)
    if(lines.length == 5){
        code()
        rl.close()
    }
  });


//   Slumpa ett tal mellan 1-10 (Check)
//   Be användaren att gissa 5 gånger på rätt tal
//   Jämför användaren input till random talet
//   Skapa hints om lägre eller högre gissningar till användaren
