const inquirer = require('inquirer');

module.exports = async (args) => {
    if(args[0] === 'new') {

    }

    let name = await inquirer.prompt({
        type: 'string',
        message: 'Project Name:',
        name: 'projectName'
    });

    let description = await inquirer.prompt({
        type: 'string',
        message: 'Description:',
        name: 'description'
    });
}