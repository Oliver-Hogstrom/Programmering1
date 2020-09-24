const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('How many Abracadabras do you want?',(answer)=>{
    for(let i=1;i<50;i++){
        if(i % 2==0){
            console.log(i + ` ${answer}`)
rl.close();
        }
    }
});

