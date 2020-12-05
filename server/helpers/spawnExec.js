const { exec } = require('child_process');

const spawnExec = () => new Promise((resolve, reject) => {
    /**
     */
    const ls = exec('cd ../ && pwd && echo'); /// this is our command
    // python2 demo.py --image Data/examples/plane.png

    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`); // grab data to "stdout" object
    });

    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });

    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });

  })

  module.exports = spawnExec