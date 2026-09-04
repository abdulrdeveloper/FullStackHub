import express from 'express'
import type { Express } from 'express'
import { authRouter } from './auth/routes';
import { authenticationMiddleware } from './auth/middleware/auth-middleware';


export function createApplication(): Express {
    const app = express()

    // Middlewares
    app.use(express.json())
    app.use(authenticationMiddleware())

    // Routes
    app.get('/', (req:any, res:any) => {
        return res.json({ message: 'Welcome to AR Auth Service, It`s Working' })
    });

    app.use('/auth',authRouter)

    return app
}