// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friend_list = ["Faryad", "Ahmed", "Ali", "Khan", "Rehan", "Malik"];
friend_list.forEach((value, index) => {
    console.log(`${(index + 1)} : ${value}`)
});
