// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

const result = (inventory) => {
  if (inventory.length >= 0) {
    for (let index = 0; index < inventory.length; index++) {
      if (inventory[index].id == 33) {
        return `Car ${inventory[index].id} is a ${inventory[index].car_year} ${inventory[index].car_make} ${inventory[index].car_model}`;
      }
    }
  }
  return [];
};
module.exports = result;
