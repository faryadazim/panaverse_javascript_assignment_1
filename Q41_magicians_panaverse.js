// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



const show_magicians = (arr_of_magicians) => {
    arr_of_magicians.map((magician) => {
        console.log(magician)
    })
}

var mag_name = ["David Blaine.", "Lance Burton", "Shin Lim", "David Copperfield."];
show_magicians(mag_name)