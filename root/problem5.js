
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const oldCar = (inventory, year) => {
  let oldCarList = [];
  if (inventory.length > 0) {
  for (let index = 0; index < inventory.length; index++) {
    if (inventory[index].car_year < year) {
      oldCarList.push(inventory[index].car_make);
    }
  }
  return `Cars older than ${year} are ${oldCarList} and the total count is ${oldCarList.length}`;
  } return [];
};
module.exports = oldCar;
