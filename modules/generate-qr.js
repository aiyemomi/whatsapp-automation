// Boiler plate code to be able to both require and import modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------
const qrcode = require('qrcode-terminal');
import client from "./auth.js"

// To generate QR code 
let generateQr = client.on('qr', qr => {
  qrcode.generate(qr, {
    small: true
  });
});
export default generateQr
