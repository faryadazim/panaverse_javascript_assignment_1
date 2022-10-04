// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”



const readline = require("readline");
// import
var transportation = [];

const rr = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

getData()

function getData() {
    rr.question("Enter Transportation Mode (*Enter empty string to print data): ", function (answer) {
        if (answer !== "") {
            transportation.push(answer)
            getData()
        }
        else {
            rr.close();
            console.log("Your List data is: ")
            transportation.forEach((value, index) => {
                console.log("I would like to own a " + value)
            });
        }
    });
}