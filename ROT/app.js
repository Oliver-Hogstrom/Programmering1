const { join } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  const alpha = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,.,_"]

  rl.question("What string do you want? " ,(answer)=>{
    let string = answer.split('').reverse()
    console.log (string)
  
    rl.question("How many rotations do you want? ", (rot)=>{
      
    })
  })
   
