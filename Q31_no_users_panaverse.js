// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let list_of_user_names_1 = ["admin", "rehman", "faryad", "rohi", "raja"];
if (list_of_user_names_1.length === 0) {
    console.log("We need to find some users!");
} else {
    list_of_user_names_1.length = 0;
    console.log("We need to find some users!");
}

