const db = require('../../helpers/db');
const chalk = require('chalk');
const gui = require('../../helpers/gui');
const inquirer = require('inquirer');
const fs = require('fs');

module.exports = async args => {
    console.log(args);
    if (args[0] == 'delete:models') {
        let data = {
            models: db
                .get('models')
                .value()
                .map((m, i) =>
                    Object.assign(m, {
                        value: {
                            index: i,
                            category: 'models'
                        },
                    })
                )
        }
        let selected = await inquirer
            .prompt([
                {
                    type: 'checkbox',
                    message: 'Select Deletions',
                    name: 'deletions',
                    choices: [
                        new inquirer.Separator(' = Models = '),
                        ...data.models,
                    ],
                },
            ])
            .then(answers => answers.deletion)

        let confirmData = selected.reduce((acc, val) => {
            return acc + `\n${data[val.category][val.index].name}`;
        }, '');

        let confirm = await inquirer
            .prompt({
                name: 'confirm',
                type: 'confirm',
                message: 'Confirm Delections:' + confirmData + '\n',
            })
            .then(answers => answers.confirm);

        if (confirm) {
            selected.forEach(val => {
                let e = data[val.category][val.index];
                console.log(`Deleting ${e.path}`);
                fs.unlinkSync(e.path);
            });
        }

        db.get('models')
            .value()
            .forEach((e, i) => {
                db.unset(`${models}.${i}.value`).write();
            });

        console.log(
            chalk.greenBright('Deletions') + ' Completed Successfully!'
        );
    }
};