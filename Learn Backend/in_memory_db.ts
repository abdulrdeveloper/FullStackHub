// Ek In Memory DB
// save('user-1', { fname, lname, })

// HashMap (Key, Value)
//        String String


// 1 { fname, lname, email, contact: { mobile }, address: { street, pin, country } }

type UserID = string


interface User {
    id: UserID
    fname: string
    lname?: string
    email: string
    contact: {
        mobile: string
    }
    address: {
        street: number
        pin: number
        country: string
    }
}


class InMemoryDB {

    private _db: Map<UserID, User> = new Map();

    public insertUser(user: User): UserID {
        if (this._db.has(user.id)) {
            throw new Error(`User with ID ${user.id} already exists.`);
        }
        this._db.set(user.id, user);
        return user.id;
    }
    
    public getUserById(userId: UserID): User | undefined {
        if (!this._db.has(userId)) {
            throw new Error(`User with ID ${userId} does not exist.`);
        }
        return this._db.get(userId);
    }

    public updateUser(userId: UserID, updatedUser: Partial<User>): User {
        if (!this._db.has(userId)) {
            throw new Error(`User with ID ${userId} does not exist.`);
        }
        const existingUser = this._db.get(userId)!;
        const mergedUser = { ...existingUser, ...updatedUser };
        this._db.set(userId, mergedUser);
        return mergedUser;
    }

    public deleteUser(userId: UserID): boolean {
        if (!this._db.has(userId)) {
            throw new Error(`User with ID ${userId} does not exist.`);
        }
        return this._db.delete(userId);
    }

}

const db = new InMemoryDB();
db.insertUser({
    id: 'user-1',
    fname: 'John',
    lname: 'Doe',
    email: 'aliahmad@gmail.com',
    contact: {
        mobile: '1234567890'
    },
    address: {
        street: 123,
        pin: 456789,
        country: 'USA'
    }
});

