
// Boiler plate code to be able to both require and import modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------

const myInterval = setInterval(myFunction, 1000);

import initializeWhatsapp from "./initialize.js"

// this function listens for the time

export default function myFunction() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds()
  if (hours === 0) {
    if(minutes === 40){
      if(seconds === 1){
          initializeWhatsapp();
      }
    }
  } else {
    clearInterval(myInterval);
  }
}
