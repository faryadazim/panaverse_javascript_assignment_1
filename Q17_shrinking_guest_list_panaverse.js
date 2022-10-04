// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



let my_friend_list = ["Faryad", "Ahmed", "Ali", "Khan", "Rehan", "Malik"];
console.log("you can invite only two people for dinner.");
my_friend_list.forEach(user => {
    if (my_friend_list.length >= 2) {
        console.log(`Sorry you cannot invite ${user} for dinner`);
        my_friend_list.pop();
    }

});
my_friend_list.forEach(user => {
    console.log(`Hey ${user} , you are invited for dinner`);

});
my_friend_list.length = 0;  // to clear array