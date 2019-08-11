const chalk = require('chalk');

const BANNER = chalk.redBright(
    `    ____              _     
   / __ \\____  ____  (_)___ 
  / /_/ / __ \\/ __ \\/ / __ \\
 / _, _/ /_/ / / / / / / / /
/_/ |_|\\____/_/ /_/_/_/ /_/          

`
);

const VERSION = chalk.redBright(`Ronin CLI `) + chalk.bgRed(`v1.0b`);

const GENERAL_HELP = chalk.whiteBright(
    `
Usage: ronin [cmd] [args]
            
Supported Commands: new, make, list, delete, test, build`
);

const MAKE_HELP = chalk.whiteBright(
    `
Usage: ronin make:[cmd] [args]

Supported Commands: migration, model, route`
);

const INIT_HELP = chalk.whiteBright(`
Usage: ronin new [projectName]   OR   ronin new`);

module.exports = {
    displayBanner: () => {
        console.log(BANNER);
    },
    displayGeneralHelp: () => {
        console.log(BANNER + VERSION + GENERAL_HELP);
    },
    displayMakeHelp: () => {
        console.log(BANNER + VERSION + MAKE_HELP);
    },
    displayInitHelp: () => {
        console.log(BANNER + VERSION + INIT_HELP);
    },
    displayError: err => {
        console.error(`${chalk.redBright('Error:')} ${err}`);
    },
};
