const templates = require('./templates/make');
const fs = require('fs');
const camelCase = require('camelcase');
const chalk = require('chalk');

const gui = require('../helpers/gui');
const db = require('../helpers/db');

module.exports = args => {
    //null
    if (args[0] === 'make') {
        gui.displayMakeHelp();
    }

    //make:migration %NAME%
    else if (args[0] === 'make:migration') {
        if (!args[1]) gui.displayError('No Name Specified.');

        let template = templates.MAKE_MIGRATION;

        if (args[1].lastIndexOf('/') == -1) {
            template = template.replace(
                /%MIGRATION%/g,
                camelCase(args[1], { pascalCase: true })
            );
        } else {
            template = template.replace(
                /%MIGRATION%/g,
                camelCase(args[1].substr(args[1].lastIndexOf('/') + 1), {
                    pascalCase: true,
                })
            );
        }

        if (
            !fs.existsSync(
                `./src/server/migrations/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`
            )
        ) {
            fs.mkdirSync(
                `./src/server/migrations/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`,
                { recursive: true }
            );
        }

        fs.writeFileSync(
            `./src/server/migrations/${camelCase(args[1])}.js`,
            template,
            { flag: 'wx' }
        );

        db.get('migrations')
            .get('order')
            .push({
                name: camelCase(args[1]),
                path: `src/server/migrations/${camelCase(args[1])}.js`,
                createdAt: new Date(),
            })
            .write();

        console.log(`${chalk.greenBright('Migration')} Successfully Created!`);
    }

    //make:model %NAME%
    else if (args[0] === 'make:model') {
        if (!args[1]) gui.displayError('No Name Specified.');

        let template = templates.MAKE_MODEL;

        if (args[1].lastIndexOf('/') == -1) {
            template = template.replace(
                /%MODEL%/g,
                camelCase(args[1], { pascalCase: true })
            );
        } else {
            template = template.replace(
                /%MODEL%/g,
                camelCase(args[1].substr(args[1].lastIndexOf('/') + 1), {
                    pascalCase: true,
                })
            );
        }

        if (
            !fs.existsSync(
                `./src/app/models/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`
            )
        ) {
            fs.mkdirSync(
                `./src/app/models/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`,
                { recursive: true }
            );
        }

        fs.writeFileSync(
            `./src/app/models/${camelCase(args[1])}.js`,
            template,
            {
                flag: 'wx',
            }
        );

        db.get('models')
            .push({
                name: camelCase(args[1]),
                path: `src/app/models/${camelCase(args[1])}.js`,
                createdAt: new Date(),
            })
            .write();

        console.log(`${chalk.greenBright('Model')} Successfully Created!`);
    }

    //make:route %NAME% %METHOD% %PATH
    else if (args[0] === 'make:route') {
        if (!args[1]) gui.displayError('No Name Specified.');

        let template = templates.MAKE_ROUTE;
        template = template
            .replace(/%METHOD%/g, args[2].toUpperCase())
            .replace(/%PATH%/g, args[3].toLowerCase());

        if (args[1].lastIndexOf('/') == -1) {
            template = template.replace(
                /%ROUTE%/g,
                camelCase(args[1], { pascalCase: true })
            );
        } else {
            template = template.replace(
                /%ROUTE%/g,
                camelCase(args[1].substr(args[1].lastIndexOf('/') + 1), {
                    pascalCase: true,
                })
            );
        }

        if (
            !fs.existsSync(
                `./src/app/routes/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`
            )
        ) {
            fs.mkdirSync(
                `./src/app/routes/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`,
                { recursive: true }
            );
        }

        fs.writeFileSync(
            `./src/app/routes/${camelCase(args[1])}.js`,
            template,
            {
                flag: 'wx',
            }
        );

        db.get('routes')
            .push({
                name: camelCase(args[1]),
                path: `src/app/routes/${camelCase(args[1])}.js`,
                createdAt: new Date(),
            })
            .write();

        console.log(`${chalk.greenBright('Route')} Successfully Created!`);
    }

    //make:module %NAME%
    else if (args[0] === 'make:module') {
        if (!args[1]) gui.displayError('No Name Specified.');

        let template = templates.MAKE_MODULE;

        if (args[1].lastIndexOf('/') == -1) {
            template = template.replace(
                /%MODULE%/g,
                camelCase(args[1])
            );
        } else {
            template = template.replace(
                /%MODULE%/g,
                camelCase(args[1].substr(args[1].lastIndexOf('/') + 1))
            );
        }

        if (
            !fs.existsSync(
                `./src/server/modules/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`
            )
        ) {
            fs.mkdirSync(
                `./src/server/modules/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`,
                { recursive: true }
            );
        }

        fs.writeFileSync(
            `./src/server/modules/${camelCase(args[1])}.js`,
            template,
            {
                flag: 'wx',
            }
        );

        db.get('modules')
            .push({
                name: camelCase(args[1]),
                path: `src/server/modules/${camelCase(args[1])}.js`,
                createdAt: new Date(),
            })
            .write();

        console.log(`${chalk.greenBright('Module')} Successfully Created!`);
    }
    //make:middleware %NAME%
    else if (args[0] === 'make:middleware') {
        if (!args[1]) gui.displayError('No Name Specified.');

        let template = templates.MAKE_MIDDLEWARE;

        if (args[1].lastIndexOf('/') == -1) {
            template = template.replace(
                /%MIDDLEWARE%/g,
                camelCase(args[1])
            );
        } else {
            template = template.replace(
                /%MIDDLEWARE%/g,
                camelCase(args[1].substr(args[1].lastIndexOf('/') + 1))
            );
        }

        if (
            !fs.existsSync(
                `./src/app/middlewares/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`
            )
        ) {
            fs.mkdirSync(
                `./src/app/middlewares/${camelCase(args[1]).substr(
                    0,
                    args[1].lastIndexOf('/')
                )}`,
                { recursive: true }
            );
        }

        fs.writeFileSync(
            `./src/app/middlewares/${camelCase(args[1])}.js`,
            template,
            {
                flag: 'wx',
            }
        );

        db.get('middlewares')
            .push({
                name: camelCase(args[1]),
                path: `src/app/middlewares/${camelCase(args[1])}.js`,
                createdAt: new Date(),
            })
            .write();

        console.log(`${chalk.greenBright('Middleware')} Successfully Created!`);
    } else {
        gui.displayError('Component Invalid!');
    }
};
