// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let list_of_user_names = ["admin", "faryad", "rohan", "manj", "laraib"];
list_of_user_names.forEach(function (user) {
    user === "admin" ? console.log("Hey Admin Would you like to See Report") : console.log(`Hello Mr. ${user} Thanks for Logging`)
});
