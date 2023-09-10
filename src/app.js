// import { v4 as uuidv4 } from 'uuid'; this is the way to import uuid with ract and with this we ned to seet   <"type": "module"> config in our packaje.json file
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
