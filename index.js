const core = require('@actions/core');
const fs = require("fs");

try {

    const PROJECT_DIRECTORY_PATH = `${process.env.PROJECT_DIRECTORY_PATH}`;

    // Make sure path to source code directory is available
    if (!fs.existsSync(PROJECT_DIRECTORY_PATH)) {
        core.setFailed(`Source directory does not exist: ${PROJECT_DIRECTORY_PATH}`);
    } else {
        core.debug(`Source dirctory: ${PROJECT_DIRECTORY_PATH}`);
    }

    const PROJECT_CSPROJ_FILE_PATH = `${process.env.PROJECT_DIRECTORY_PATH}/${process.env.PROJECT_DIRECTORY_PATH}.csproj`;

    if (!fs.existsSync(PROJECT_CSPROJ_FILE_PATH)) {
        core.setFailed(`Source directory does not exist: ${PROJECT_CSPROJ_FILE_PATH}`);
    } else {
        core.debug(`Source dirctory: ${PROJECT_CSPROJ_FILE_PATH}`);
    }

} catch (error) {
    core.setFailed(error.message);
}