let x1=10+'5'
console.log(`Result of 10 + '5' is ${x1}`)
let x2=10;
x2 += 5
console.log(`The value of x after x = 10; x += 5 is ${x2}`)
let x3=10-null;
console.log(`Result of 10 - null is ${x3}`)
let x4=10;
x4 *=2;
console.log(`The value of x after x = 10; x *= 2; is ${x4}`)
let x5=10 / "2";
// JavaScript tries to apply the division operator (/). To do this, it needs to ensure both operands (the numbers on either side of the /) are of the same type.

console.log(`The result of x5=10 / "2"; is ${x5}`)
console.log(`The result of 10 % 3 is ${10%3}`)
let x6=10;
x6=x6**2;
console.log(`The value of x after x = 10; x = x ** 2; is ${x6}`)

console.log(`The result of 10 > 5 && 5 < 10 is ${(10>5) &&(5<10)}`)

console.log(`The result of 10 === '10' is ${10 === '10'}`)
console.log(`The result of null ?? 'default' is ${null??'default'}`)
console.log(`The result of 10 || 'default' is ${10 || 'default' }`)
console.log(`The result of !true is ${!true}`)
console.log(`The result of 10 & 5 is ${10 & 5}`)
console.log(`The result of 10 | 5 is ${10 | 5}`)
console.log(`The result of 10 ^ 5 is ${10 ^ 5}`)
x8=10;
y8=++x8;
console.log(`The result of x = 10; y = ++x; ${y8}`)
x99=10;
y99=x99++;
console.log(`The result of x = 10; y = x++; is ${x99}, ${y99}`)
// console.log(`The values of x and y`)
// console.log(x99)
// console.log(y99)


let x11=10
x11=++x11;
console.log(`The result of x = 10; console.log(++x); is ${x11} `)
let x12=10;
x12=x12++
console.log(`The result of x = 10; console.log(x++); is ${x12} `)
x13=10;
y13=--x13;
console.log(`The result of x = 10; y = --x;then the values of x and y is ${x13} and ${y13}`)
let x14=10;
let y14=x14--;
console.log(`The result of x = 10; y = x--; then  the values of x and y is ${x14} and ${y14}`)


// Terinary Operator
//. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? What is the value of y?
let x15=10;
let y15= (y=x15>5)?'yes':'No';
console.log(`The result of x = 10; y = x > 5 ? 'yes' : 'no';? then the value of y is ${y15}`)
//2. What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';? What is the value of y?
let x = 10; 
let x17= (y = x > 5) ? 'yes' : x > 3 ? 'maybe' : 'no';
console.log(`The result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';? What is the value of y is ${x17}`)
// Optional Chaining:

// 1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?

// 2. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);?

// 3. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);?
const obj1={a:{b:'c'}}
let x18=obj1?.a?.b
console.log(`The result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b); is ${x18}`);
const obj2= { a: { b: 'c' } } ;
let x19=obj2?.a?.c
console.log(`The result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c); is ${x19}`)
const obj = { a: { b: 'c' } };
let x20=obj?.b?.c
console.log(`The result of const obj = { a: { b: 'c'} }; console.log(obj?.b?.c); is ${x20}`)

// Nullish Coalescing:

// 1. What is the result of x = null; y = x ?? 'default';? What is the value of y?

// 2. What is the result of x = undefined; y = x ?? 'default';? What is the value of y?

// 3. What is the result of x = 0; y = x ?? 'default';? What is the value of y?
x20=null;
let yy=(y20=x20)??'default';
console.log(`The result of x = null; y = x ?? 'default';? then the value of y is ${yy}`)

x21=undefined;
let yyy=(y21=x21)??'default';
console.log(`The result of x = undefined; y = x ?? 'default';? then the value of y is ${yyy}`)

xx=0;
let yyyy=(y22 = xx )?? 'default';
console.log(` the result of x = 0; y = x ?? 'default';? then the value of y is ${yyyy}`)
