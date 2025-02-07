const express = require("express");
const router = express.Router();
const path = require("path");

const fileName = path.basename(__filename);
const controller = require(`../controllers/${fileName}Controller`);

router.post("/", controller.create);
router.get("/", controller.get);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
