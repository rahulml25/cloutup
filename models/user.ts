import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  firstname: {
    type: String,
    maxlength: [30, 'firstname cannot be more than 30 characters'],
  },
  lastname: {
    type: String,
    maxlength: [40, 'lastname cannot be more than 40 characters'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  lastlogin: {
    type: Date,
    default: Date.now,
  },
}, {timestamps: true});

export default (
  mongoose.models.User ||
  mongoose.model('User', UserSchema)
);
