const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const endpointsPath = path.join(__dirname, "endpoints");

fs.readdirSync(endpointsPath)
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        const route = require(path.join(endpointsPath, file));
        const routeName = `/${file.replace(".js", "")}`;
        router.use(routeName, route);
    });

module.exports = router;
