const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Write the first three digit number: ', (answer)=>{
  let numbers = answer.split(' ')
  console.log(numbers)

  let num1 = numbers[0].split('').reverse().join('')
  let num2 = numbers[1].split('').reverse().join('')

  if(num1 > num2){
    console.log("Number 1 is the largest")
  }
  else if(num1<num2){
    console.log("Number 2 is the largest: " )
  }
  
})








// var a = rl.question('give me the first three digit number? ');
// var b = rl.question('give me the seccond three digit number? ');
// var ans;

// if(a < b){
//     ans = reverseInt(a)
// }else{
//     ans = reverseInt(b)
// }
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join(''); 
//     return Math.sign(n) * parseInt(reversed); }

//   console.log(ans)