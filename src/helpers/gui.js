const BANNER = 
`    ____              _     
   / __ \\____  ____  (_)___ 
  / /_/ / __ \\/ __ \\/ / __ \\
 / _, _/ /_/ / / / / / / / /
/_/ |_|\\____/_/ /_/_/_/ /_/          

`;

const VERSION = `Ronin CLI v0.1b`;

const GENERAL_HELP = 
`
Usage: ronin [cmd] [args]
            
Supported Commands: new, make, list, delete, test, build`;

const MAKE_HELP =
`
Usage: ronin make:[cmd] [args]

Supported Commands: migration, model, route`;

module.exports = {
    displayBanner: () => {
        console.log(BANNER);
    },
    displayGeneralHelp: () => {
        console.log(BANNER + VERSION + GENERAL_HELP);
    },
    displayMakeHelp: () => {
        console.log(BANNER + VERSION + MAKE_HELP);
    }
}