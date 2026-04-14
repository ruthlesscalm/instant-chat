class AppError extends Error {
  constructor(message, statusCode, messageCode) {
    super(message);
    this.statusCode = statusCode;
    this.code = messageCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
