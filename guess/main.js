const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let random = Math.round(Math.random() * 10) + 1;
  
let tries = 5

      rl.on('line', (input)=>{
        let ans = parseInt(input)
        tries--;

        if(tries === 0){
          console.log("You're out of tries m8 :(")
          process.exit();
        }
        else if(random==ans){
          console.log("Congrats, you've won!");
          process.exit();
        }
        else if(random>ans){
          console.log("You have to guess higher mate!");
        }
        else if(random<ans){
          console.log("You have to guess lower mate!");
        } 
        })
      
//   Slumpa ett tal mellan 1-10 (Check)
//   Be användaren att gissa 5 gånger på rätt tal
//   Jämför användaren input till random talet
//   Skapa hints om lägre eller högre gissningar till användaren
