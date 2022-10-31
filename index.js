// Boiler plate code to be able to both require and import modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------

import quoteOfDay from "./modules/getquote.js"

import initializeWhatsapp from "./modules/initialize.js"

import client from "./modules/auth.js"

import myFunction from "./modules/myFunction.js"

import generateQr from "./modules/generate-qr.js"
