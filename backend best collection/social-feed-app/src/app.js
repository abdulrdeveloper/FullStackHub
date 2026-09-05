import express from 'express';
import multer from 'multer';
const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()});

app.post('/create-post', upload.single('image'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.status(201).json({ message: 'Post created successfully' });
});

export default app;