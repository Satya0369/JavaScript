let num2=12345;
// let len = String(num2).length
let len=(num2.toString).length
console.log(len)




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