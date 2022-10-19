const Tour = require("../model/tourSchema.js");
/**
 * @param  {} =>Get all Tours
 */
module.exports.getToursService = async () => {
  const result = await Tour.find({});
  return result;
};

/**
 * @param  {} data
 * @param  {} => create new tour
 */
module.exports.createTourService = async (data) => {
  const newTour = new Tour(data);
  const result = await newTour.save();
  return result;
};
