const { reverse } = require('dns');
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const one = rl.question('What is the first number? ')
  const two = rl.question('What is the second number? ')

  let answer;

  if(one<two){
    answer = reverseInt(one)
  }else{
    answer = reverseInt(two)
  }
  function reverseInt(a) {
    const reversed = a.toString('').split('').reverse('').join(''); 
    return Math.sign(a) * parseInt(reversed); }

    console.log(answer)






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