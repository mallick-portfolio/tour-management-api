const express = require("express");
const tourController = require("../../controller/tour.controller.js");
const router = express.Router();

router.route("/").get(tourController.getTours).post(tourController.createTour);

router.get("/:id", tourController.getTourById);
router.patch("/:id", tourController.updateByIdTour);
module.exports = router;
