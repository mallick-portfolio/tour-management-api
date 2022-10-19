const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tour place name must be required"],
      unique: [true, "Tour place name must be unique"],
      minLength: [5, "Tour place name must be greater than 5 character"],
      maxLength: [100, "Tour place name must be less than 100 character"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: [true, "Tour place image must be required"],
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    location: {
      type: String,
      required: true,
    },
    reviews: {
      type: Number,
    },
    status: {
      type: String,
      required: true,
      enum: ["open", "close"],
    },
    view: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
