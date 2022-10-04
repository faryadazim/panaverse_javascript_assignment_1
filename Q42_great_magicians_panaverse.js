// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



const make_great=(arr_of_magicians)=>{
    arr_of_magicians.map((magician, index)=>{
        mag_name[index]="Great "+magician;
    })
}
const show_magicians=(arr_of_magicians)=>{
    arr_of_magicians.map((magician, index)=>{
        console.log(magician)
    })
}

var mag_name=["David Copperfield","Doug Henning","Siegfried and Roy","Lance Burton"];
make_great(mag_name)
show_magicians(mag_name)
