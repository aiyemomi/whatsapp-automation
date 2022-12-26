import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------
import dayDifference, {numOfDays} from "./days.js"

// To get quote from the json file
let loadQuote = ()=>{
  let loadedQuote = JSON.parse(fs.readFileSync('quotes.json'));
  return loadedQuote;
}
export const quote = loadQuote()

// const arrIndex = Math.floor(Math.random() * quote.length)

const quoteOfDay = quote[numOfDays].quote

export default quoteOfDay
