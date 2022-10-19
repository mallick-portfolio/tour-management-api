const Tour = require("../model/tourSchema.js");

// Get all tour service
module.exports.getToursService = async (queries) => {
  const result = await Tour.find({})
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sort);
  const totalTour = await Tour.countDocuments({});
  const totalPage = Math.ceil(totalTour / queries.limit);
  return { totalTour, totalPage, result };
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
