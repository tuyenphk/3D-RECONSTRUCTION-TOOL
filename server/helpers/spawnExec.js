const { spawn } = require('child_process');

const spawnExec = () => new Promise((resolve, reject) => {
    /**
     */
    const ls = spawn('sh network-call.sh',['fileName'],{ shell: true }); /// this is our command
    // https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options

    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`); // grab data to "stdout" object
        /* do sth with stdout */
        // extra obj file name
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