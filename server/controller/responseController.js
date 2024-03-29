const errorResponse = (
  res,
  { statusCode = 500, message = "This message is from custom error handler" }
) => {
  return res.status(statusCode).json({ success: false, message });
};

const successResponse = (
  res,
  { statusCode = 200, message = "Success", payload }
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    payload,
  });
};

module.exports = {
    errorResponse,
    successResponse
}