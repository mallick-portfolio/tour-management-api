const errorHandler = (err, req, res, next) => {
  res.status(400).json({
    status: "failed",
    message: err.message,
  });
};

module.exports = errorHandler;
