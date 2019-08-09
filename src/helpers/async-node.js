const {exec, spawn} = require('child_process');

module.exports = {
    execAsync: (cmd) => {
        return new Promise((res, rej) => {
            exec(cmd, (err, stdout, stderr) => {
                if(err)
                    rej(err);
                console.log(stdout ? stdout: stderr);
                res(stdout ? stdout : stderr);
            })
        });
    },
    execStream: (cmd) => {
        return new Promise((res, rej) => {
            let spawned = exec(cmd);
            spawned.stdout.on('data', function (data) {
                console.log(data.toString());
            });
            spawned.stderr.on('data', function (data) {
                console.error(data.toString());
            });
            spawned.on('exit', function() {
                res();
            });
        });
    }
}