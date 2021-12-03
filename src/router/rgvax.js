const express = require("express");
const router = express.Router();
const controller = require("../controllers/rgControllers")

router.post("/", controller.createVaccinated)
router.get("/", controller.getAllVaccinated )
router.get("/:id", controller.getVaccinated)
router.patch("/:id/vaccines", controller.updateVaccinated)
router.delete("/:id", controller.deleteVaccinated)

module.exports = router;