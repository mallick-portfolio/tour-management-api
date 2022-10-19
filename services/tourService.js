const Tour = require("../model/tourSchema.js");

// Get all tour service
module.exports.getToursService = async () => {
  const result = await Tour.find({});
  return result;
};
// Get tour by id service
module.exports.getTourByIdService = async (id) => {
  const result = await Tour.findById(id);
  return result;
};

// create new tour service
module.exports.createTourService = async (data) => {
  const newTour = new Tour(data);
  const result = await newTour.save();
  return result;
};

// update tour service by id
module.exports.updateTourByIdService = async (id, data) => {
  const result = await Tour.findByIdAndUpdate(id, data, {
    runValidators: true,
  });
  return result;
};
