#!/usr/bin/env node
const init = require('./scripts/init');
const make = require("./scripts/make");
const list = require("./scripts/list");

const [, , ...args] = process.argv;

(async () => {
    if (!args.length) {
console.log(`
    ____              _     
   / __ \\____  ____  (_)___ 
  / /_/ / __ \\/ __ \\/ / __ \\
 / _, _/ /_/ / / / / / / / /
/_/ |_|\\____/_/ /_/_/_/ /_/                   
`);
        console.log(`Ronin CLI v0.1b
Usage: ronin [cmd] [args]
            
Supported Commands: new, make, list, delete, test, build`);
    } else if (args[0].includes('new')) {
        await init(args);
    } else if (args[0].includes('make')) {
        make(args);
    } else if (args[0].includes('list')) {
        list(args);
    }
})();

