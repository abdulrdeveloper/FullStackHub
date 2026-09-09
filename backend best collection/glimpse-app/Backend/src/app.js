import express from 'express';
import cors from 'cors';
import multer from 'multer';
import {uploadFile} from './services/storage.service.js';
import postModel from './model/post.model.js';
const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()});


app.post('/create-post', upload.single('image'), async (req, res) => {
  try {
    const result = await uploadFile(req.file.buffer);
    const post = new postModel({
      image: result.url,
      caption: req.body.caption,
    });
    await post.save();
    res.status(201).json({
      message: 'Post created successfully',
      post: post
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating post' });
  }
});


app.get('/posts', async (_req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json({
      message: 'Posts fetched successfully',
      posts: posts
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
});


export default app;
