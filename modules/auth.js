// Boiler plate code to be able to both require and import modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require ('fs');
// ---------------------

// for authentication
const {
  Client,
  LocalAuth
} = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth()
});

export default client
