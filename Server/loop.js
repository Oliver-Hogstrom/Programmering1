var index = 0

let names = ["Adam", "Alex", "Oliver", "Melker", "David"]

for (let i = names.length - 1; i >= 0 ; i--) {
 //console.log(names[i])
}

let foundOliver = false

// while (!foundOliver) {
//     if(names[index] === "Oliver"){
//         foundOliver = true
//     }
//     else{
//         index --
//     }
// }

//console.log("I found Oliver at Index: " + index)

for (let i = 0; i<100;i++){
    if (i % 2==0){
        console.log(i)
    }
}
for(let o =5; o<79;o++){
    if( o % 3==0){
        console.log(o)
    }
}

let teachers = ["Niklas", "Victor", "Parvin"]

for (let t =teachers.length - 1; t >= 0; t--){
    console.log(teachers[t])
}

for (let n = 0; n<100;n++){
    if(n % 2==0){
        console.log(n)
    }
    else if(n % 3==0 && n % 5 ==0){
        console.log("FizzBuzz")
    }
    else if(n % 3 ==0){
        console.log("Fizz")
    }
    else if(n % 5==0){
        console.log("Buzz")
    }
}