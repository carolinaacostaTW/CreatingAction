const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs')

try {
    const name = core.getInput('who-to-greet')

    function buildTree(startPath){
        fs.readdir(startPath, (err, entries) => {
            console.log(entries);
        });
    }

    buildTree('/Users/carolina.acosta/Proyectos')
    // throw(new Error("some error message"));
    // const name = core.getInput('who-to-greet')
    // console.log(`Hello ${name}`)

    // const time = new Date();
    // core.setOutput("time", time.toTimeString());

    // console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
    core.setFailed(error.message)
}



