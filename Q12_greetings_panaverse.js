// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friend_list = ["Faryad", "Ahmed", "Ali", "Khan", "Rehan", "Malik"];
friend_list.forEach((value, index) => {
    console.log(`Salam ${value} bhai ! How are you?`)
});
