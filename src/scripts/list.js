const db = require('../helpers/db');
const chalk = require('chalk');
const gui = require('../helpers/gui');

module.exports = args => {
    //null
    if (args[0] == 'list') {
        gui.displayListHelp();
    }

    else if (args[0] == 'list:all') {

        console.log(chalk.greenBright("Models:"))
        db.get('models').value().forEach(m => console.log(m));

        console.log(chalk.greenBright("Migrations:"))
        db.get('migrations').get('order').value().forEach(m => console.log(m));

        console.log(chalk.greenBright("Modules:"))
        db.get('modules').value().forEach(m => console.log(m));

        console.log(chalk.greenBright("Middlewares:"))
        db.get('middlewares').value().forEach(m => console.log(m));
    }

    else if (args[0] == 'list:migrations') {
        console.log(chalk.greenBright("Migrations:"))
        db.get('migrations').get('order').value().forEach(m => console.log(m));
    }

    else if (args[0] == 'list:models') {
        console.log(chalk.greenBright("Models:"))
        db.get('models').value().forEach(m => console.log(m));
    }

    else if (args[0] == 'list:modules') {
        console.log(chalk.greenBright("Modules:"))
        db.get('modules').value().forEach(m => console.log(m));
    }

    else if (args[0] == 'list:middlewares') {
        console.log(chalk.greenBright("Middlewares:"))
        db.get('middlewares').value().forEach(m => console.log(m));
    }

    else if (args[0] == 'list:routes') {
        console.log(chalk.greenBright("Routes:"))
        db.get('routes').value().forEach(m => console.log(m));
    }
};
