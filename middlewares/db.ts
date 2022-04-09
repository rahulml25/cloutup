import mongoose from 'mongoose';
import {errorHandler} from './error';
const requestIp = require('request-ip');

const connectDB = (handler) => errorHandler(async (req, res) => {
  console.log(req.connection.remoteAddress, requestIp.getClientIp(req));
  if (req.headers.host !== process.env.HOST) {
    res.status(400);
    throw new Error('not allowed');
  } else if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DATABASE_URI);
  }
  return await handler(req, res);
});

export default connectDB;
