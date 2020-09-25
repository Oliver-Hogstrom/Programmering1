let s = 10
let h = 4
let v = 7

let A = h*v
let B = (s-h) * v
let C = h*(s-v)
let D = (s-h)*(s-v)

let pices = [A,B,C,D]

pices.sort().reverse()

let largest = pices[pices.length-1] *4

console.log(largest)