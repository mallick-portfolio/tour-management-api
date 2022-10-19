const Tour = require("../model/tourSchema.js");
const tourService = require("../services/tourService.js");

module.exports.getTours = async (req, res, next) => {
  try {
    const tours = await tourService.getToursService();
    if (tours) {
      res.status(200).json({
        status: "success",
        message: "Tours get successfully",
        data: tours,
      });
    }else{
      res.status(200).json({
        status: "fail",
        message: "Failed to get tours",
        data: tours,
      });
    }
  } catch (error) {
    next(error);
  }
};
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
