const { spawn } = require('child_process');

const spawnExec = (imageFilename) => new Promise((resolve, reject) => {
    /**
     */
    // imageFilename = "plane.png";
    console.log(`output: ${imageFilename}`)
    const ls = spawn('sh network-call.sh',[imageFilename],{ shell: true }); /// this is our command
    // https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options

    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`); // grab data to "stdout" object
        /* do sth with stdout */
        // extra obj file name input.obj
        objFilename = imageFilename.split('.')[0]+'.obj';
        resolve(objFilename)
    });

    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });

    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

})

module.exports = spawnExec