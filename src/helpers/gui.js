const chalk = require('chalk');

const BANNER = chalk.redBright(
    `    ____              _     
   / __ \\____  ____  (_)___ 
  / /_/ / __ \\/ __ \\/ / __ \\
 / _, _/ /_/ / / / / / / / /
/_/ |_|\\____/_/ /_/_/_/ /_/          

`
);

const VERSION = chalk.redBright(`Ronin CLI `) + chalk.bgRed(`v0.0.6b`);

const GENERAL_HELP = chalk.whiteBright(
    `
Usage: ronin [cmd] [args]
            
Supported Commands: new, make, list, delete, test, build`
);

const MAKE_HELP = chalk.whiteBright(
    `
Usage: ronin make:[component] [args]

Supported Commands: migration, middleware, model, route, custom

Example Syntax:

ronin make:migration %NAME%
ronin make:middleware %NAME%
ronin make:model %NAME%
ronin make:route %NAME% %METHOD% %PATH%
ronin make:custom %NAME%
`);

const INIT_HELP = chalk.whiteBright(`
Usage: ronin new [projectName]   OR   ronin new`);

const LIST_HELP = chalk.whiteBright(`
Usage: ronin list:[query]

Supported Queries: all, migrations, models, modules, middlewares, routes`);

const DELETE_HELP = chalk.whiteBright(`
Usage: ronin delete:[query]

Supported Queries: select, migrations, models, modules, middlewares, routes`);

const DELETE_WARNING = chalk.whiteBright(
    `Deletions are permanent and cannot be reverted. Are you sure you want to continue?`
);

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
    displayListHelp: () => {
        console.log(BANNER + VERSION + LIST_HELP);
    },
    displayDeleteHelp: () => {
        console.log(BANNER + VERSION + DELETE_HELP);
    },
    displayDeleteWarning: () => {
        console.log(DELETE_WARNING);
    },
    displayError: err => {
        console.error(`${chalk.redBright('Error:')} ${err}`);
    },
};
