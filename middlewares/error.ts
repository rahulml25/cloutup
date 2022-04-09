interface AppErrorData {
  message: String,
  stack?: String,
}

const errorHandler = (handler) => async (req, res) => {
  try {
    return await handler(req, res);
  } catch (err) {
    const statusCode = res.statusCode || 500;
    const context: AppErrorData = {
      message: err.message,
    };

    if (process.env.NODE_ENV !== 'production') {
      context.stack = err.stack;
    } else if (statusCode >= 500) {
      context.message = 'internal server error';
    }

    res.status(statusCode).json(context);
  }
}

export {
  errorHandler,
}
