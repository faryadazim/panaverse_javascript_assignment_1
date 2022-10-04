// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


//version 1
var alien_color_v_1 = "green";
if (alien_color_v_1 == "green") {
  console.log("Player earned 5 points");
} else if (alien_color_v_1 == "yellow") {
  console.log("Player earned 10 points");
} else {
  console.log("Player earned 15 points");
}

//version 2
var alien_color_v_2 = "yellow";
if (alien_color_v_2 == "green") {
  console.log("Player earned 5 points");
} else if (alien_color_v_2 == "yellow") {
  console.log("Player earned 10 points");
} else {
  console.log("Player earned 15 points");
}

//version 3
var alien_color_v_3 = "red";
if (alien_color_v_3 == "green") {
  console.log("Player earned 5 points");
} else if (alien_color_v_3 == "yellow") {
  console.log("Player earned 10 points");
} else {
  console.log("Player earned 15 points");
}
