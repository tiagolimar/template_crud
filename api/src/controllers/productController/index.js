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

module.exports = handlers;
