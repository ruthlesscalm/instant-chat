const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.customStatus;
  const messageCode = err.messageCode;

  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      code: "JSON_FORMAT_INVALID",
      message: "Not a valid json object",
    });
  }
  console.log("Error: ", err);
  return res.status(statusCode || 500).json({
    success: false,
    code: messageCode || "INTERNAL_SERVER_ERROR",
    message: statusCode ? err.message : "Internal Server Error",
  });
};

export default errorMiddleware;
