#!/usr/bin/env node
const init = require('./scripts/init');
const make = require('./scripts/make');
const list = require('./scripts/list');

const gui = require('./helpers/gui');

const [, , ...args] = process.argv;

(async () => {
    if (!args.length) {
        gui.displayGeneralHelp();
    } else if (args[0].includes('help')) {
        gui.displayGeneralHelp();
    } else if (args[0].includes('new')) {
        await init(args);
    } else if (args[0].includes('make')) {
        make(args);
    } else if (args[0].includes('list')) {
        list(args);
    }
})();
