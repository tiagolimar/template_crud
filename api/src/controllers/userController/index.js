const fs = require("fs");
const path = require("path");

const handlers = {};

const handlersPath = path.join(__dirname, "handlers");

fs.readdirSync(handlersPath)
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        const functionName = file.replace(".js", "");
        handlers[functionName] = require(path.join(handlersPath, file));
    });

function getParentFolderName() {
    const pathParts = __dirname.split('\\');
    return pathParts[pathParts.length-1];
}

const entityName = getParentFolderName().replace('Controller', '');

module.exports = {handlers, entityName};
