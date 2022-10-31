// Boiler plate code to be able to both require and import modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------

import quoteOfDay, {quote} from "./getquote.js";

import dayDifference, {numOfDays} from "./days.js"

import client from "./auth.js";

// function to initializeWhatsapp and send message

export default function initializeWhatsapp() {
  if(numOfDays<quote.length){
  client.on('ready', () => {
    console.log('Client is ready!');
    client.getChats().then((chats) => {
      const myGroup = chats.find((chat) => chat.name === 'WhatsApp automation test');
      client.sendMessage(myGroup.id._serialized,
        quoteOfDay
      );
console.log(quoteOfDay);
    });
  });
  client.initialize();
}}
