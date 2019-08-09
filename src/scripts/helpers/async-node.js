const {exec} = require('child_process');

module.exports = {
    execAsync: async function(cmd) {
        return new Promise((res, rej) => {
            exec(cmd, (err, stdout, stderr) => {
                if(err)
                    rej(err);
                console.log(stdout ? stdout: stderr);
                res(stdout ? stdout : stderr);
            })
        })
    }
}