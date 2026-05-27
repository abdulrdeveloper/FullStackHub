import type { Request, Response } from 'express'
import { randomBytes, createHmac } from 'node:crypto'
import { signinPayloadModel, signupPayloadModel } from './models'
import { db } from '../../db'
import { usersTable } from '../../db/schema'
import { eq } from 'drizzle-orm'
import { createUserToken } from './utils/token'
import type { UserTokenPayload } from './utils/token'

class AuthenticationController {
    public async handleSignup(req: Request, res: Response) {
        const validationResult = await signupPayloadModel.safeParseAsync(req.body)

        if (validationResult.error) return res.status(400).json({ message: 'body validation failed', error: validationResult.error.issues })

        const { firstName, lastName, email, password } = validationResult.data

        const userEmailResult = await db.select().from(usersTable).where(eq(usersTable.email, email))

        if (userEmailResult.length > 0) return res.status(400).json({ error: 'duplicate entry', message: `user with email ${email} already exists` })

        const salt = randomBytes(32).toString('hex')
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        const [result] = await db.insert(usersTable).values({
            firstName,
            lastName,
            email,
            password: hash,
            salt
        }).returning({ id: usersTable.id })

        return res.status(201).json({ message: 'user has been created successfully', data: { id: result?.id } })
    }

    public async handleSignin(req: Request, res: Response) {
        const validationResult = await signinPayloadModel.safeParseAsync(req.body)

        if (validationResult.error) return res.status(400).json({ message: 'body validation failed', error: validationResult.error.issues })

        const { email, password } = validationResult.data

        const [userSelect] = await db.select().from(usersTable).where(eq(usersTable.email, email))

        if (!userSelect) return res.status(404).json({ message: `user with email ${email} does not exists` })

        const salt = userSelect.salt!
        const hash = createHmac('sha256', salt).update(password).digest('hex')

        if (userSelect.password !== hash) return res.status(400).json({ message: `email or password is incorrect` })

        const token = createUserToken({ id: userSelect.id })

        return res.json({ message: 'Signin Success', data: { token } })

    }

    public async handleMe(req: Request, res: Response) {
        // @ts-ignore
        const { id } = req.user! as UserTokenPayload

        const [userResult] = await db.select().from(usersTable).where(eq(usersTable.id, id))

        return res.json({
            firstName: userResult?.firstName,
            lastName: userResult?.lastName,
            email: userResult?.email
        })
    }
}

export default AuthenticationController