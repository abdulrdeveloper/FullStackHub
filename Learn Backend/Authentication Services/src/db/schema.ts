import { pgTable, uuid, varchar, text, boolean, timestamp } from 'drizzle-orm/pg-core'
import { time } from 'node:console'

export const usersTable = pgTable('users', {
    
    id: uuid('id').primaryKey().defaultRandom(),         // db mai first column mai ek unique user id aiy gi next column mai user key hogi , 3rd column mai by default random user data aiy ga
    firstName: varchar('first_name', { length: 45 }).notNull(),
    lastName: varchar('last_name', { length: 45 }),

    /* iska matlab he ke ORM mapper ko ham bol rhay hain ke hmari application mai user ka name camel-case (firstName) mai rakhna ,
    but db mai snake_case (first_name) mai store kr lena khud hi , and first name ki max length rakhi 45 letter, and notNull kr dia means ke yay required he , skip nai kr saktay */
    
    email: varchar('email', { length: 322 }).notNull().unique(),
    emailVerified: boolean('email_verified').default(false),

    password: varchar('password', { length: 66 }),
    salt: text('salt'),
    
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
})