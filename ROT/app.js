const { join } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_."

  rl.question("Type in a number and an message: " ,(answer)=>{
    
    let splitAnswer = answer.split(' ')

    let rotation = Number(splitAnswer[0])
    let message = splitAnswer[1]

    let result = ""

    for (const letter of message) {
        let letterIndex = alpha.indexOf(letter)

        let newIndex = letterIndex + rotation

        if(newIndex > 27){
          newIndex = newIndex - 28
        }

        let newLetter = alpha[newIndex]

        result += newLetter
    }
    let reverseResult = result.split('').reverse().join('')
    console.log(reverseResult)

    rl.close()

  })
   
