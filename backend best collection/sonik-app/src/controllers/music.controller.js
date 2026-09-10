import musicModel from '../models/music.model.js';
import jwt from 'jsonwebtoken';


async function createMusic(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.type !== 'artist') {
            return res.status(403).json({ message: "You don't have permission to create music" });
        }
        const { title } = req.body;
        const file = req.file;

    }catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}