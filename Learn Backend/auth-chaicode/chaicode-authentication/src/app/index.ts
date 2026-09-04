import express from 'express'
import type { Express } from 'express'

import { authRouter } from './auth/routes'
import { authenticationMiddleware } from './middleware/auth-middleware'

export function createApplication(): Express {
    const app = express()

    // Middlewares
    app.use(express.json())
    app.use(authenticationMiddleware())


    // Routes
    app.get('/', (req, res) => {
        return res.json({ message: 'Welcome to ChaiCode Auth Service' })
    })

    app.use('/auth', authRouter)


    return app
}