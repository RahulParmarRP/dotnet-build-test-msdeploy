const core = require(`@actions/core`);
const fs = require("fs");

try {

    const PROJECT_DIRECTORY_PATH = `${process.env.PROJECT_DIRECTORY_PATH}`;
    const PROJECT_CSPROJ_FILE_PATH = `${process.env.PROJECT_DIRECTORY_PATH}/${process.env.PROJECT_DIRECTORY_PATH}.csproj`;
    const COMPUTER_NAME = `${process.env.COMPUTER_NAME}`
    const IIS_WEBSITE_NAME = `${process.env.IIS_WEBSITE_NAME}`
    const SERVER_USERNAME = `${process.env.SERVER_USERNAME}`
    const SERVER_PASSWORD = `${process.env.SERVER_PASSWORD}`
    const RECYCLE_APP_NAME = `${process.env.RECYCLE_APP_NAME}`
    const CONTENTPATH = `${process.env.CONTENTPATH}`

    // Make sure path to source code directory is available
    if (fs.existsSync(PROJECT_DIRECTORY_PATH)) {
        core.debug(`Source dirctory: ${PROJECT_DIRECTORY_PATH}`);
    } else {
        core.setFailed(`Source directory does not exist: ${PROJECT_DIRECTORY_PATH}`);
    }

    if (fs.existsSync(PROJECT_CSPROJ_FILE_PATH)) {
        core.debug(`Default csproj file: ${PROJECT_CSPROJ_FILE_PATH}`);

    } else {
        core.setFailed(`Default csproj file does not exist: ${PROJECT_CSPROJ_FILE_PATH}`);
    }

    if (process.env.COMPUTER_NAME) {
        core.debug('COMPUTER_NAME is set');
    }
    else {
        core.setFailed(`COMPUTER_NAME is not set: ${COMPUTER_NAME}`);
    }

    if (process.env.IIS_WEBSITE_NAME) {
        core.debug('IIS_WEBSITE_NAME is set');
    }
    else {
        core.setFailed(`IIS_WEBSITE_NAME is not set: ${IIS_WEBSITE_NAME}`);
    }

    if (process.env.SERVER_USERNAME) {
        core.debug('SERVER_USERNAME is set');
    }
    else {
        core.setFailed(`SERVER_USERNAME is not set: ${SERVER_USERNAME}`);
    }

    if (process.env.SERVER_PASSWORD) {
        core.debug('SERVER_PASSWORD is set');
    }
    else {
        core.setFailed(`SERVER_PASSWORD is not set: ${SERVER_PASSWORD}`);
    }

    if (process.env.RECYCLE_APP_NAME) {
        core.debug('RECYCLE_APP_NAME is set');
    }
    else {
        core.setFailed(`RECYCLE_APP_NAME is not set: ${RECYCLE_APP_NAME}`);
    }

    if (process.env.CONTENTPATH) {
        core.debug('CONTENTPATH is set');
    }
    else {
        core.setFailed(`CONTENTPATH is not set: ${CONTENTPATH}`);
    }

} catch (error) {
    core.setFailed(error.message);
}