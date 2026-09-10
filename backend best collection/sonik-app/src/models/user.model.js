import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
        unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['user', 'artist'],
      default: 'user',
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

export default userModel;
