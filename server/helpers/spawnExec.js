const { spawn } = require("child_process");

const ls = spawn("ls", ["-la"]); /// this is our command

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