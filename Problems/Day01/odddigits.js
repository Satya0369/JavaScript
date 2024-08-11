// 3) Write a program to print the odd digits in the given number
// input:8839793
// output: 3973
let num=8839793;
num=String(num)
// console.log(num[1])
for(i=0;i<=(num.length)-1;i++){
    if(Number(num[i])%2 !=0){
        console.log(num[i])
    }
}
