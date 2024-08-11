// Write a program to print the product all the digits in the given number by using while loop.
// input: 3431
// output: 36


// let y=Math.trunc(13/3)
// let z=Math.floor(13/3)

// Math.trunc() (truncate fractional part, also see below)
// Math.floor() (round down)
// Math.ceil() (round up)
// Math.round() (round to nearest integer)

// let x = 9 / 2;
// console.log(x); // 4.5

// x = ~~x;
// console.log(x); // 4

// x = -3.7
// console.log(~~x) // -3
// console.log(x | 0) // -3
// console.log(x << 0) // -3

let input=3431;
let prd=1;
    while(input != 0){
        let lastd=(input%10);
        prd=prd*lastd
        input=parseInt(input/10)
    }
console.log(prd)