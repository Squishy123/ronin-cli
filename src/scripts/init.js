const inquirer = require('inquirer');
const { execStream } = require('../helpers/async-node');
const git = require('simple-git');

const gui = require('../helpers/gui');

module.exports = async (args) => {
    try {
        //new name or new
        if (args[0] === 'new') {
            let name;
            if (args[1]) {
                name = args[1];
            } else {
                name = await inquirer.prompt({
                    type: 'string',
                    message: 'Project Name:',
                    name: 'projectName'
                });
            }
            //clone repo
            //await git().silent(true).clone('https://github.com/Squishy123/ronin.git', `./${name}`);
            await execStream(`git clone https://github.com/Squishy123/ronin.git ./${name} --progress`);

            //install dependencies
            await execStream(`cd ${name} && yarn`);

            console.log(`
Ronin Project Created Successfully!
cd ${name}
and run 
ronin start`)
        } else {            
            gui.displayInitHelp();
        } 

    } catch (err) {
        console.error(`Error: ${err}`);
    }
}