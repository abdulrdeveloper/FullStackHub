import express from 'express';
import multer from 'multer';
import verifyArtist from '../middlewares/music.middleware.js';
import authCheck from '../middlewares/auth.middleware.js';
import { createMusic, createAlbum, getAllMusic, getAllAlbums ,getAlbumById} from '../controllers/music.controller.js';

const upload = multer({
    storage: multer.memoryStorage(),
});
const musicRoutes = express.Router();
musicRoutes.post('/upload', verifyArtist, upload.single('music'), createMusic);
musicRoutes.post('/album', verifyArtist, createAlbum);
musicRoutes.get('/', authCheck, getAllMusic);
musicRoutes.get('/albums', authCheck, getAllAlbums);
musicRoutes.get('/albums/:albumId', authCheck, getAlbumById);

export default musicRoutes;
