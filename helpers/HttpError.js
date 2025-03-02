const errorMessageList = {
  400: "Помилка від Joi або іншої бібліотеки валідації",
  401: "Not authorized",
  403: "Forbidden",
  404: "Not found",
  409: "Email in use",
};

const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
