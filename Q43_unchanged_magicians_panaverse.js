// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const make_great = (arr_of_magicians) => {
    var new_array = arr_of_magicians.slice();
    arr_of_magicians.map((magician, index) => {
        new_array[index] = "Great " + magician;
    })
    return new_array;
}
const show_magicians = (arr_of_magicians) => {
    arr_of_magicians.map((magician, index) => {
        console.log(magician)
    })
}

var magician_name = ["David Copperfield", "Doug Henning", "Siegfried and Roy", "Lance Burton"];
var greate_mag_name = make_great(magician_name)
show_magicians(magician_name)
show_magicians(greate_mag_name)