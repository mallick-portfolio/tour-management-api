const Tour = require("../model/tourSchema.js");

const viewCount = async (req, res, next) => {
  try {
    const result = await Tour.findByIdAndUpdate(
      { _id: req.params.id },
      { $inc: { view: 1 } }
    );
    if (result) {
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = viewCount;
