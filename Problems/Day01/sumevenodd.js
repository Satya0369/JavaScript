// 5) Write a program to print the sum of even digits and odd digits in the given number
// input: 8382127
// output: Even sum is : 20
// Odd sum is : 11

let input=212374;
let sum_eve=0;
let sum_odd=0;
input=String(input)
for(i=0;i<input.length;i++){
    
    if((Number(input[i]) %2) ==0){
      
        sum_eve +=Number(input[i]); 
    }
    else if((Number(input[i]) %2) !=0){
        sum_odd +=Number(input[i]); 
    }
}
console.log(sum_eve)
console.log(sum_odd)
