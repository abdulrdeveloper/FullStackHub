import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
}, {
  timestamps: true,
});

const postModel = mongoose.model('post', postSchema);

export default postModel;