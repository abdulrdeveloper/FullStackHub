import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerUser);
authRoutes.post('/login', loginUser);

export default authRoutes;
