// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

let car;
const add_car_value = (manf_name, model, color, price, ...arbitary_val) => { //arbitary is an arr
    car = {
        manufacturer: manf_name,
        model: model,
        color: color,
        price: price,
        statement: arbitary_val
    }
}
add_car_value("Suzuki", 2023, "red", 20000000, "Unique", "modern", "speedy")
console.log(car);
