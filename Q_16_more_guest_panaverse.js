// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

var friend_name = ["Faryad", "Ali", "Mohsin", "Adil", "Rahat"];
friend_name.forEach((value, index) => {
    console.log("Hello " + value + "! How are you? You are invited to today's dinner at my place. I would love to join. Thank you!")
});
console.log("")
console.log("Ali cannot make it")
console.log("")
friend_name = ["Mohsin", "Hamza", "Devine", "Qamar", "Ejaz"];
friend_name.forEach((value, index) => {
    console.log("Hello " + value + "! How are you? You are invited to today's dinner at my place. I would love to join. Thank you!")
});
console.log("\nn")
friend_name = ["Rehman", "Rohit", "Hamza", "Josef", "Rbia", "Ishq", "Mariyam"];
friend_name.push("Devdas")
friend_name.forEach((value, index) => {
    console.log("Hello " + value + "! How are you? You are invited to today's dinner at my place. I would love to join. Thank you!")
});



