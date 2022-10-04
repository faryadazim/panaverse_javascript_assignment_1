// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let my_name = 'faryad';
console.log(my_name != 'faryad')
console.log(my_name == 'faryad')

let lowerCase = "LowerCase"
console.log(lowerCase.toLowerCase() == 'lowercase')

let aNumber = 10;
console.log(aNumber == 10)
console.log(aNumber != 10)
console.log(aNumber < 10)
console.log(aNumber >= 10)
console.log(aNumber <= 10)


console.log(aNumber == 10 || aNumber == 5)
console.log(aNumber == 10 && aNumber == 5)

const fruits = ["Peach", "Banana", "Apple", "Nashpati"];
var flagExist = false;
fruits.map((fruitItem) => {
    if (fruitItem == "Peach")
        flagExist = true
})
if (flagExist) {
    console.log("Exist")
} else {
    console.log("Not Exist")
}

var flagExist1 = false;
fruits.map((fruitItem) => {
    if (fruitItem == "Orange")
        flagExist1 = true
})
if (flagExist1) {
    console.log("Exist")
} else {
    console.log("Not Exist")
}


