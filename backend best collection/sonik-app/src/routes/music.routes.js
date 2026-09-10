import express from 'express';
import multer from 'multer';
import { createMusic } from '../controllers/music.controller.js';

const upload = multer({
    storage: multer.memoryStorage(),
});
const musicRoutes = express.Router();
musicRoutes.post('/upload', upload.single('music'), createMusic);

export default musicRoutes;

