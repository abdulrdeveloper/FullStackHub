// Ek In Memory DB
// save('user-1', { fname, lname, })

// HashMap (Key, Value)
//        String String


// 1 { fname, lname, email, contact: { mobile }, address: { street, pin, country } }
/* Yeh code asal mein ek custom In-Memory Database ka basic engine hai jo data ko temporary tor par RAM mein store karta hai.

Real-world production mein hum is manual Map approach ko directly zyada use nahi karte, lekin isay samajhna backend architecture ke liye bohot zaroori hai. Industry ka sab se powerful caching tool Redis bilkul isi core concept (Key-Value pair) par kaam karta hai—faraq sirf itna hai ke Redis isi cheez ka ek behad advanced, highly scalable, aur super-fast version hai jo ek alag server par chalta hai. */

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

const user = db.getUserById('user-1');
console.log(user);

db.updateUser('user-1', { lname: 'Smith' });

const updatedUser = db.getUserById('user-1');
console.log(updatedUser);

db.deleteUser('user-1');

try {
    const deletedUser = db.getUserById('user-1');
    console.log(deletedUser);
} catch (error:any) {
    console.error(error.message);
}