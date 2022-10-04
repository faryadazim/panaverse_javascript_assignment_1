// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



const makesandwich = (items) => {
    var summary = "";
    items.map((item) => {
        summary += item + ", ";
    })
    console.log("Person wants " + summary + " on his sandwich")

}

makesandwich(["Cheese", "Onion", "Chicken"])
makesandwich(["Cheese", "Hard-boiled egg", "Fried Egg"])
makesandwich(["Cheese", "Onion", "Fried Egg"])