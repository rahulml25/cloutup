import mongoose from 'mongoose';
import {errorHandler} from './error';

const connectDB = (handler) => errorHandler(async (req, res) => {
  console.log(req.headers.host);
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DATABASE_URI);
  }
  return await handler(req, res);
});

export default connectDB;
