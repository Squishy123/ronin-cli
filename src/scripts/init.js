const inquirer = require('inquirer');
const { execStream } = require('../helpers/async-node');
const chalk = require('chalk');

const fs = require('fs-extra');

const gui = require('../helpers/gui');

module.exports = async args => {
    try {
        //new name or new
        if (args[0] === 'new') {
            let name;
            if (args[1]) {
                name = args[1];
            } else {
                name = await inquirer
                    .prompt({
                        type: 'string',
                        message: 'Project Name:',
                        name: 'projectName',
                    })
                    .then(answers => answers.projectName);
            }
            //clone repo
            await execStream(
                `git clone --depth 1 https://github.com/Squishy123/ronin-starter.git ./${name} --progress`
            );

            //wipe and redo git
            await fs.remove(`${name}/.git`);
            await execStream(`cd ${name} && git init && git add -A && git commit -m "Ronin Project Init"`);

            //install dependencies
            await execStream(`cd ${name} && npm install`);

            console.log(
                chalk.white(`
Ronin Project Created Successfully!
cd ${name} && npm run dev`)
            );
        } else {
            gui.displayInitHelp();
        }
    } catch (err) {
        gui.displayError(err);
    }
};
