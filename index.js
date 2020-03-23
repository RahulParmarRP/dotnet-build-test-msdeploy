const core = require(`@actions/core`);
const fs = require("fs");

try {

    const PROJECT_DIRECTORY_PATH = `${process.env.PROJECT_DIRECTORY_PATH}`;
    const PROJECT_CSPROJ_FILE_PATH = `${process.env.PROJECT_DIRECTORY_PATH}/${process.env.PROJECT_DIRECTORY_PATH}.csproj`;
    const IIS_SERVER_COMPUTER_NAME = `${process.env.IIS_SERVER_COMPUTER_NAME}`
    const IIS_WEBSITE_NAME = `${process.env.IIS_WEBSITE_NAME}`
    const IIS_SERVER_USERNAME = `${process.env.IIS_SERVER_USERNAME}`
    const IIS_SERVER_PASSWORD = `${process.env.IIS_SERVER_PASSWORD}`
    const RECYCLE_APP_NAME = `${process.env.RECYCLE_APP_NAME}`
    const WEBSITE_CONTENT_PATH = `${process.env.WEBSITE_CONTENT_PATH}`

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

    if (process.env.IIS_SERVER_COMPUTER_NAME) {
        core.debug('IIS_SERVER_COMPUTER_NAME is set');
    }
    else {
        core.setFailed(`IIS_SERVER_COMPUTER_NAME is not set: ${IIS_SERVER_COMPUTER_NAME}`);
    }

    if (process.env.IIS_WEBSITE_NAME) {
        core.debug('IIS_WEBSITE_NAME is set');
    }
    else {
        core.setFailed(`IIS_WEBSITE_NAME is not set: ${IIS_WEBSITE_NAME}`);
    }

    if (process.env.IIS_SERVER_USERNAME) {
        core.debug('IIS_SERVER_USERNAME is set');
    }
    else {
        core.setFailed(`IIS_SERVER_USERNAME is not set: ${IIS_SERVER_USERNAME}`);
    }

    if (process.env.IIS_SERVER_PASSWORD) {
        core.debug('IIS_SERVER_PASSWORD is set');
    }
    else {
        core.setFailed(`IIS_SERVER_PASSWORD is not set: ${IIS_SERVER_PASSWORD}`);
    }

    if (process.env.RECYCLE_APP_NAME) {
        core.debug('RECYCLE_APP_NAME is set');
    }
    else {
        core.setFailed(`RECYCLE_APP_NAME is not set: ${RECYCLE_APP_NAME}`);
    }

    if (process.env.WEBSITE_CONTENT_PATH) {
        core.debug('WEBSITE_CONTENT_PATH is set');
    }
    else {
        core.setFailed(`WEBSITE_CONTENT_PATH is not set: ${WEBSITE_CONTENT_PATH}`);
    }

} catch (error) {
    core.setFailed(error.message);
}