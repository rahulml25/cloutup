
const errorHandler = (handler) => async (req, res) => {
  try {
    return await handler(req, res);
  } catch (err) {
    const statusCode = res.statusCode || 500;
    const context = {
      message: err.message,
    };

    if (process.env !== 'production') {
      context.stuck = err.stack;
    } else if (statusCode >= 500) {
      context.message = 'internal server error';
    }

    res.status(statusCode).json(context);
  }
}

export {
  errorHandler,
}
