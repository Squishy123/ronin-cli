#!/usr/bin/env node
const init = require('./scripts/init');
const make = require("./scripts/make");
const list = require("./scripts/list");

const [, , ...args] = process.argv;

(async () => {
    if (!args.length) {
        console.log(`Ronin CLI
Usage: ronin [cmd] [args]
            
Supported Commands: new, make, list, delete, test, build`);
    } else if (args[0].includes('new')) {
        await init();
    } else if (args[0].includes('make')) {
        make(args);
    } else if (args[0].includes('list')) {
        list(args);
    }
})();

