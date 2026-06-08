`Chai aur SQL` — A Beginner's Journey into Databases
---

SQL stands for Structured Query Language. It is the language we use to talk to relational databases like MySQL, PostgreSQL, and SQLite.

## What is a Server and Where Does the Database Live?

Most beginners think the database is somewhere floating in the "cloud." It is not.

A database is software running on a server. A server is just a powerful computer that runs 24/7 inside a data center — like Amazon AWS, Google Cloud, or DigitalOcean. When that software saves your data, it writes it to actual files on the server's SSD or hard drive.

MySQL and PostgreSQL save data as `.ibd` files or WAL (Write-Ahead Log) files. MongoDB saves as `.bson` files. These files sit on disk just like any file on your laptop.

When you write this in your backend code:

```javascript
const pool = new Pool({ host: 'localhost', port: 5432 })
```

You are telling your backend to open a connection to the port where the database is listening. That is it. It is a TCP connection — like a phone call between your application and the database.

---

## Why Docker for PostgreSQL?

Instead of installing PostgreSQL directly on my system, I used Docker. Docker creates an isolated environment (called a container) so I do not mess up my laptop's setup.

Here is the command I used to create a PostgreSQL container with persistent data:

**Mac / Linux / WSL:**
```bash
docker run -d --name sql_class \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=sql_class_01_db \
  -p 5433:5432 \
  -v "$(pwd)/pgdata:/var/lib/postgresql/data" \
  postgres
```

**Windows (PowerShell):**
```powershell
docker run -d --name sql_class -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=sql_class_01_db -p 5433:5432 -v "${PWD}/pgdata:/var/lib/postgresql/data" postgres
```

The `-v` flag maps a `pgdata` folder inside your current directory to the container's storage. So even if the container is deleted, your data stays on your laptop.

To check if the container is running:
```bash
docker ps
```

To remove the container:
```bash
docker rm -f sql_class
```

---

## Why Learn Raw SQL When We Have Prisma and Drizzle?

This was my first question. Why learn raw SQL when Prisma can generate the queries for me?

Here is what I found out:

ORMs like Prisma and Drizzle translate your JavaScript/TypeScript code into SQL strings and send them to the database. If you do not know SQL, you do not know what Prisma is actually doing behind the scene.

The N+1 problem is a real thing. ORMs sometimes generate 100 queries instead of 1 optimized query. You will only catch this if you understand SQL.

For complex queries — joining 6 tables, generating financial reports — ORM syntax breaks down. Developers fall back to raw SQL.

And SQL has not changed in 50 years. Sequelize came and went. Prisma came. Drizzle came. SQL is still the same.

---

## DDL — How You Create Tables

DDL stands for Data Definition Language. These are the commands that define the structure of your database — not the data, just the structure.

The four main DDL commands are `CREATE`, `ALTER`, `DROP`, and `TRUNCATE`.

Here is a real table I created while practicing:

```sql
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number CHAR(10) UNIQUE,
    age INT CHECK (age > 12),
    current_status VARCHAR(20) DEFAULT 'active'
        CHECK (current_status IN ('active', 'graduated', 'dropped_out', 'on_leave')),
    has_joined_masterji BOOLEAN DEFAULT FALSE,
    current_score NUMERIC(5, 2) CHECK (current_score >= 0 AND current_score <= 100),
    enrollment_date DATE DEFAULT CURRENT_DATE
);
```

`SERIAL` means auto-incrementing integer — PostgreSQL handles the ID for you. `NOT NULL` means the column cannot be empty. `UNIQUE` means no two rows can have the same value. `CHECK` is a custom condition — here age must be greater than 12. `DEFAULT` sets a value automatically if nothing is provided.

To add a new column to an existing table later:

```sql
ALTER TABLE students ADD COLUMN batch_name VARCHAR(50) DEFAULT 'Web Dev 2026';
```

---

## SELECT Queries — Reading Your Data


SELECT is the command to read data from a table.

```sql
-- Get everything
SELECT * FROM ipl_players;

-- Get specific columns
SELECT name, team, auction_price_crores FROM ipl_players;
```

**Filtering with WHERE:**

```sql
-- Basic condition
SELECT * FROM ipl_players WHERE team = 'Mumbai Indians';

-- Multiple conditions
SELECT * FROM ipl_players WHERE role = 'All-Rounder' AND wickets_taken > 10;

-- Either condition
SELECT * FROM ipl_players WHERE team = 'CSK' OR team = 'RCB';

-- Range
SELECT * FROM ipl_players WHERE auction_price_crores BETWEEN 5 AND 12;

-- From a list
SELECT * FROM ipl_players WHERE team NOT IN ('Mumbai Indians', 'CSK', 'RCB');

-- Pattern matching — names starting with R
SELECT * FROM ipl_players WHERE name LIKE 'R%';

-- Check for empty values
SELECT * FROM ipl_players WHERE team IS NULL;
```

`%` means zero or more characters. `_` means exactly one character. `LIKE` is case-sensitive. `ILIKE` is case-insensitive (PostgreSQL only).

**Sorting and limiting:**

```sql
-- Sort by price, highest first
SELECT name, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC;

-- Top 3 results
SELECT name, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 3;

-- Skip first 3, get next 3 (pagination)
SELECT name, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 3 OFFSET 3;
```

---

## DML — Insert, Update, Delete

DML stands for Data Manipulation Language. This is how you actually work with the data inside the tables.

**INSERT:**

```sql
-- Single row
INSERT INTO canteen_menu (item_name, category, price)
VALUES ('Vada Pav', 'Snacks', 15);

-- Multiple rows at once
INSERT INTO canteen_menu (item_name, category, price) VALUES
('Masala Chai', 'Beverages', 10),
('Samosa', 'Snacks', 12),
('Maggi', 'Snacks', 25);
```

**UPDATE:**

```sql
UPDATE canteen_menu
SET price = 20
WHERE item_name = 'Vada Pav';
```

**DELETE:**

```sql
DELETE FROM canteen_menu WHERE item_name = 'Cold Coffee';
```

Always use `WHERE` with UPDATE and DELETE. If you forget the WHERE clause, SQL will update or delete every single row in the table. I learned this the hard way in practice.

---

## Aggregate Functions — COUNT, SUM, AVG, MAX, MIN

Aggregate functions take a whole column and return one number.

```sql
-- How many rows?
SELECT COUNT(*) FROM smart_watch_sales;

-- Total revenue
SELECT SUM(units_sold * price_per_unit) AS total_revenue FROM smart_watch_sales;

-- Average price
SELECT AVG(price_per_unit) AS avg_price FROM smart_watch_sales;

-- Cheapest and most expensive
SELECT MIN(price_per_unit) AS cheapest, MAX(price_per_unit) AS costliest FROM smart_watch_sales;
```

**GROUP BY** lets you split these calculations by category:

```sql
-- Total units sold per brand
SELECT brand, SUM(units_sold) AS total_units_sold
FROM smart_watch_sales
GROUP BY brand
ORDER BY total_units_sold DESC;
```

**HAVING** filters the groups after they are created. WHERE cannot do this because WHERE runs before grouping:

```sql
-- Only show brands that sold more than 20 units total
SELECT brand, SUM(units_sold) AS total_units
FROM smart_watch_sales
GROUP BY brand
HAVING SUM(units_sold) > 20;
```

---

## Joins — Connecting Multiple Tables

This is where relational databases get powerful.

We keep data in separate tables to avoid duplication. Students in one table, internships in another. Joins let you combine them in one query.

**Foreign Key** is what connects the tables. The internships table has a `student_id` column that references the `student_id` in the students table:

```sql
CREATE TABLE internships (
    internship_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id) ON DELETE SET NULL,
    company_name VARCHAR(100),
    role VARCHAR(50),
    stipend INT,
    status VARCHAR(20)
);
```

`ON DELETE SET NULL` means if a student is deleted, the internship record stays but `student_id` becomes NULL. `ON DELETE CASCADE` would delete the internship too.

**INNER JOIN — only matching rows:**

```sql
SELECT s.name, s.branch, i.company_name, i.role
FROM students s
INNER JOIN internships i ON s.student_id = i.student_id;
```

Students without internships will not show up here.

**LEFT JOIN — all students, matched or not:**

```sql
SELECT
    s.name,
    s.branch,
    COALESCE(i.company_name, 'No Internship') AS company_name,
    COALESCE(i.stipend, 0) AS stipend
FROM students s
LEFT JOIN internships i ON s.student_id = i.student_id;
```

`COALESCE` replaces NULL with a default value. Students without internships will appear with 'No Internship' instead of NULL.

To find students who have NOT applied anywhere:

```sql
SELECT s.name, s.email
FROM students s
LEFT JOIN internships i ON s.student_id = i.student_id
WHERE i.internship_id IS NULL;
```

**RIGHT JOIN** returns all rows from the right table. In practice, developers rarely use RIGHT JOIN — they just flip the table order and use LEFT JOIN instead. It reads more naturally.

**FULL OUTER JOIN — everything from both tables:**

```sql
SELECT s.name AS student_name, i.company_name
FROM students s
FULL OUTER JOIN internships i ON s.student_id = i.student_id;
```

This shows all students and all internships. Where there is no match on either side, you get NULL.

---

## Indexes — Making Queries Fast

I inserted 1,000,000 rows into a table to test this.

Without an index, when you search by name, PostgreSQL scans every single row from top to bottom. This is called a Sequential Scan.

```sql
EXPLAIN ANALYZE SELECT marks FROM marks WHERE name = '809E15792322';
```

`EXPLAIN ANALYZE` shows you the query plan and execution time. Before adding an index, my query took around 40-50 milliseconds on 1 million rows.

After creating an index:

```sql
CREATE INDEX idx_name ON marks (name);
```

The same query dropped to under 1 millisecond. PostgreSQL now uses a B-Tree structure to find the row directly instead of scanning everything.

A **covering index** goes one step further. If your query asks for `marks` along with `name`, you can store both in the index itself:

```sql
CREATE INDEX idx_name ON marks (name) INCLUDE (marks);
```

Now PostgreSQL does not even need to visit the main table. It gets everything from the index directly. This is called an Index Only Scan.

---

## Transactions and ACID

A transaction is a way to group multiple SQL operations into one unit of work. Either all of them succeed, or none of them do.

The classic example is a bank transfer:

```sql
BEGIN;

    UPDATE accounts SET balance = balance - 500 WHERE owner = 'Shubham';
    UPDATE accounts SET balance = balance + 500 WHERE owner = 'Hitesh';

COMMIT;
```

If the server crashes between the two UPDATE statements, the database will rollback both changes. The money will not disappear from Shubham's account and fail to reach Hitesh.

If something goes wrong, you can manually undo everything:

```sql
BEGIN;
    UPDATE accounts SET balance = balance - 5000 WHERE owner = 'Shubham';
ROLLBACK;
```

**ACID** is the set of guarantees that make this work:

**Atomicity** — All or nothing. If Step 2 fails, Step 1 is also undone. I tested this by putting `SELECT 1/0` (division by zero error) in the middle of a transaction. The whole thing rolled back.

**Consistency** — The database only moves from one valid state to another. I set `CHECK (balance >= 0)` on the accounts table. When I tried to deduct 5000 from an account with 1000, PostgreSQL threw an error and refused the operation completely.

**Isolation** — Uncommitted transactions are invisible to other connections. I opened two terminal windows to test this. Terminal 1 started a transaction and updated a balance but did not COMMIT. Terminal 2 could still see the old balance. Only after Terminal 1 ran `COMMIT` did Terminal 2 see the new number.

**Durability** — Once committed, data is permanent. PostgreSQL writes committed transactions to the Write-Ahead Log (WAL) on disk before returning a success response. Even if the server crashes one second after the COMMIT, the data will be there when the server restarts.

---


[Real World Database Collections ↗
](https://github.com/abdulrdeveloper/web-dev-for-all/tree/main/learn-sql/SQL/SQL%20Code)

---

All the code from this blog is in my GitHub repo: [github.com/abdulrdeveloper/Learn-SQL](https://github.com/abdulrdeveloper/web-dev-for-all/Learn-SQL)

---
