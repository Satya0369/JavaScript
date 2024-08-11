// for( i=40;i<=50;i++){
//     if((i%2)==0){
//         console.log(`40x${i-40}=${40*(i-40)}`)
//     }
   
// }

//Task1
let sum_50=0;
let sum_100=0;
for (i=0;i<=100;i++){
    if(i%2==0){
        sum_100 += i
    }
    
}
if(sum_100==2550){
    console.log(`sum of 100 even num = ${sum_100}`)
}
else{
    console.log(`sum of 100 even num !=  ${sum_50}`)
}
for (i=0;i<=50;i++){
    if(i%2==0){
        sum_50 += i
    }
    
}

if(sum_100==650){
    console.log("sum of 50 even num = 650")
}
else{
    console.log("sum of 100 even num != 650")
}

console.log(`\nTask 1 completed\n`);

//task2

let num1=5;
let fact=1;
for(i=(num1);i>0;i--){
    fact *=i
}
console.log(fact)

console.log(`\nTask 2 completed\n`);

//task3
let num2=24355;
let len = String(num2).length
console.log(len)
let num3=6454545;
let arr=[];
// for (i=0;i<String(num3).length;i++){
//     arr[i]=num3[i]
// }
// console.log(arr.length)
function stringlen(str){
    var count=0;
    var index=0;
    while(str[index] !== undefined){
        count +=1;
        index +=1;
       
    }
    return count;
}

let xx=stringlen(String(num3))
console.log(xx)
console.log(`\nTask 3 completed\n`)

var fun=(ss) =>{
    var count=0;
    var index=0;
    while(str[index] !== undefined){
        count +=1;
        index +=1;
       
    }
    return count;

}


// 1. Write a program to determine the fare for a taxi ride based on the distance traveled:
//     - 0-5 km: $5
//     - 5-10 km: $10
//     - 10-20 km: $20
//     - Above 20 km: $30 + $5 for every additional km

let dist=50;
let amt=0;
if(dist>0 && dist<=5){
    console.log(`Amount For below 5km = $5`)
}
else if(dist>5 && dist<=10){
    console.log(`Amount For dist between 6km to 10km  = $10`)
}
else if(dist>10 && dist<=20){
    console.log(`Amount For dist between 10km to 20km  = $20`)
}
else if(dist>20){
    let diff=dist-20;
    amt=30+diff*5
    console.log(`Above 20 km: $30 + $5 for every additional km = ${amt}`)

}
console.log(`\nTask 4 completed\n`)


// 2. Write a program to determine the discount on a product based on the quantity purchased:
//     - 1-5 units: No discount
//     - 6-10 units: 5% discount
//     - 11-20 units: 10% discount
//     - Above 20 units: 15% discount


let weight=60;
let dis_amt=0;
if(weight>0 && weight<=5){
    console.log(`No Discount`)
}
else if(weight>5 && weight<=10){
    dis_amt=(weight*(0.05))
    // dis_amt=Math.round(dis_amt)
   dis_amt =dis_amt.toFixed(2)
    console.log(`Discount =${dis_amt}`)
}
else if(weight>10 && weight<=20){
    dis_amt=weight*(0.1)
    // dis_amt=Math.round(dis_amt)
    dis_amt =dis_amt.toFixed(2)
    console.log(`Discount =${dis_amt}`)

}
else if(dist>20){
    dis_amt=(weight*(0.15))
    // dis_amt=Math.round(dis_amt)
    dis_amt =dis_amt.toFixed(2)
    console.log(`Discount =${dis_amt}`)

}
console.log(`\nTask 5 completed\n`)

// Switch Statement:

// 1. Write a program to determine the type of coffee based on the user's selection:
//     - 1: Espresso
//     - 2: Cappuccino
//     - 3: Latte
//     - 4: Mocha

let coffee=4;
switch(coffee){
    case 1:
        console.log(" You've selected Espresso");
        break;
    case 2:
        console.log(" You've selected Cappuccino");
         break;
    case 3:
        console.log(" You've selected Latte");
        break;

    case 4:
        console.log(" You've selected Mocha");
                    break;

    default:
        console.log(" you didn't get the coffee");


}

console.log(`\nTask 6 completed\n`)

// 2. Write a program to determine the shipping cost based on the region:
//     - 1: North America ($10)
//     - 2: South America ($20)
//     - 3: Europe ($30)
//     - 4: Asia ($40)
//     - 5: Australia ($50)

let region="Asia"
region=region.toLowerCase();
switch(region){
    case "north america":
        console.log("shipping cost for North America is $10")
        break
    case "south america":
        console.log("shipping cost for South America is $20")
        break
    case "europe":
        console.log("shipping cost for Europe is $30") 
        break
    case "asia": 
    console.log("shipping cost for Asia is $30") 
    break

    case "australia":
        console.log("shipping cost for is  Australia $50") 
        break

default:
    console.log("There is no shipping Facility for ypur region") 


}

console.log(`\nTask 7 completed\n`)