// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const get_lower = () => {
  var user_name = "Muhammad Faryad Azim";
  return user_name.toLocaleLowerCase();
}
const get_upper = () => {
  var user_name = "Muhammad Faryad Azim";
  return user_name.toUpperCase();;
}
const get_title = () => {
  var user_name = "Muhammad Faryad Azim";
  let sentence = user_name.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}
console.log("In Lower Case... " + get_lower());
console.log("In Upper Case...  " + get_upper());
console.log("In Title Case..." + get_title());
