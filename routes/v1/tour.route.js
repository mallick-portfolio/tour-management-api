const express = require("express");
const tourController = require("../../controller/tour.controller.js");
const viewCount = require("../../middleware/countTourViewByIdHandler.js");
const router = express.Router();

router.get("/trending", tourController.getToursByMostView);
router.get("/cheapest", tourController.getToursByChipestView);

router.route("/").get(tourController.getTours).post(tourController.createTour);

router.get("/:id", viewCount, tourController.getTourById);
router.patch("/:id", tourController.updateByIdTour);
module.exports = router;
