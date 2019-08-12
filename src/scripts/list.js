const db = require('../helpers/db');
const chalk = require('chalk');

module.exports = args => {
    //null
    if (args[0] == 'list') {
        console.log(
            `Usage: ronin list:[query]
Supported Queries: all, migration, model, route`
        );
    }

    if (args[0] == 'list:all') {

        console.log(chalk.redBright("MODELS:"))
        db.get('models').value().forEach(m => console.log(m));

        console.log(chalk.redBright("MIGRATIONS:"))
        db.get('migrations').get('order').value().forEach(m => console.log(m));

        console.log(chalk.redBright("MODULES:"))
        db.get('modules').value().forEach(m => console.log(m));

        console.log(chalk.redBright("ROUTES:"))
        db.get('routes').value().forEach(m => console.log(m));
    }
};
