let input=1254877;
let sum_eve=0
let sum_odd=0
input=String(input)
for(i=0;i<input.length;i++){
    if(Number(input[i]) %2 ==0){
        sum_eve += Number(input[i])
    }
    else if(Number(input[i]) %2 !=0){
        sum_odd += Number(input[i])
    }
}
// console.log(sum_eve)
// console.log(sum_odd)
// if(sum_eve>sum_odd){
//     console.log("true")
// }
// else{
//     console.log("False")
// }
console.log(typeof(sum_eve))
let xx=((sum_eve)>(sum_odd))?"True":"False";
console.log(xx)