const express = require("express");
const router = express.Router();
const controller = require("../controllers/rgControllers")

router.post("/", controller.createRgVax)
router.get("/", controller.getAllVaccinated )
router.get("/:id", controller.getVaccinated)

module.exports = router;