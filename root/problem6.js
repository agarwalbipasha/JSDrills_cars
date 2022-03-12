

// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

const BMWAndAudi = (inventory) => {
    let carList = [];
    if (inventory.length > 0) {
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index].car_make == "BMW" || inventory[index].car_make == "Audi") {
            // Adding elements to the carList
            carList.push(inventory[index]);
        }
    } // Returning the carList in the form of Strings
    return JSON.stringify(carList);
} return [];
}
module.exports = BMWAndAudi;