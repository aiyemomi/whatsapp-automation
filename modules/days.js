// Boiler plate code to be able to both require and import modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------


// function to calculate the number of days between "2022-10-29"(the date code was deployed) and today's date
let currentDate = new Date().toJSON().slice(0, 10);

export let numOfDays = dayDifference("2022-10-29", currentDate);
export default function dayDifference(firstDate, secondDate) {
  firstDate = new Date(firstDate);
  secondDate = new Date(secondDate);
  if (!isNaN(firstDate) && !isNaN(secondDate)) {
    firstDate.setHours(0, 0, 0, 0);
    secondDate.setHours(0, 0, 0, 0);
    var dayDiff = secondDate - firstDate;
    dayDiff = dayDiff / 86400000;
    return dayDiff;
  }
}
