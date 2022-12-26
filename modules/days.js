
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------

let currentDate = new Date().toJSON().slice(0, 10);

export let numOfDays = dayDifference("2022-12-26", currentDate);
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
