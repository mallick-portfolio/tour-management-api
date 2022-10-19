const Tour = require("../model/tourSchema.js");
const tourService = require("../services/tourService.js");

// Gell all tours
module.exports.getTours = async (req, res, next) => {
  try {
    const tours = await tourService.getToursService();
    if (tours) {
      res.status(200).json({
        status: "success",
        message: "Tours get successfully",
        data: tours,
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "Failed to get tours",
      });
    }
  } catch (error) {
    next(error);
  }
};

// Get single tour
module.exports.getTourById = async (req, res, next) => {
  try {
    const tour = await tourService.getTourByIdService(req.params.id);
    if (tour) {
      res.status(200).json({
        status: "success",
        message: "Tours get successfully by id",
        data: tour,
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "Failed to get tours",
      });
    }
  } catch (error) {
    next(error);
  }
};

// Create new tour
module.exports.createTour = async (req, res, next) => {
  try {
    const result = await tourService.createTourService(req.body);
    res.status(200).json({
      status: "success",
      message: "New tour added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update tour by id
module.exports.updateByIdTour = async (req, res, next) => {
  try {
    const result = await tourService.updateTourByIdService(
      req.params.id,
      req.body
    );
    res.status(200).json({
      status: "success",
      message: "Tour updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
