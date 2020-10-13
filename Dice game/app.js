// Räkna ut medelkast = högsta + lägsta /2

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const lines = []

function code(){
    let side1 = Number(lines[0])
    let side2 = Number(lines[1])
    let side3 = Number(lines[2])
    let side4 = Number(lines[3])

// Emma is result1 and gunnar is result 2

    let result1 = (side1 + side2)/2
    let result2 = (side3 + side4)/2

    console.log(result1 , result2);

    if(result1>result2){
      console.log('Emma is the winner with a score of: ' + result1)
    }else if(result1<result2){
      console.log('Gunanr is the winner with a score of: ' + result2)
    }else if(result1==result2){
      console.log('Tie!!!');
    }
  }

  rl.on('line', (input) => {
    lines.push(input)
    if(lines.length == 4){
      code()
      rl.close()
    }
  });