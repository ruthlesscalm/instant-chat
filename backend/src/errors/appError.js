class AppError extends Error {
  constructor(message, statusCode, messageCode) {
    super(message);
    this.customStatus = statusCode;
    this.messageCode = messageCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
