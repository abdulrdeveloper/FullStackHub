# SQL DDL (Data Definition Language) & Constraints

In this guide, we will understand what **DDL** is and how to use it along with **Constraints** to safely define the structure of our tables.

## 1. What is DDL?
**DDL (Data Definition Language)** consists of SQL commands that can be used to define or modify the database schema (structure). It deals with how the data should reside in the database.

Common DDL Commands:
* **`CREATE`**: Creates a new table, database, or other objects.
* **`ALTER`**: Modifies an existing database object (e.g., adding a column to a table).
* **`DROP`**: Deletes an entire table (or database) along with its structure and data.
* **`TRUNCATE`**: Removes all the records from a table, but keeps its structure intact.

## 2. What are Constraints?
Constraints are rules applied to columns in a table. These rules make sure only valid and accurate data goes into the database. If any action violates these rules, SQL aborts the action.

Common Constraints:
1. **`PRIMARY KEY`**: Uniquely identifies each record in a table. It cannot be `NULL` and must be entirely unique. (Usually paired with `SERIAL` for auto-incrementing IDs).
2. **`NOT NULL`**: Ensures a column cannot have a `NULL` (empty) value. Every single row must have a value for this.
3. **`UNIQUE`**: Ensures that all values in a column are different. (e.g., Email addresses).
4. **`CHECK`**: Ensures that all values in a column satisfy a specific condition. (e.g., `age > 12`).
5. **`DEFAULT`**: Sets a default value for a column if no value is explicitly provided.

---

## 3. Full Example Code

```sql
-- DDL Command: DROP
DROP TABLE IF EXISTS students;

-- DDL Command: CREATE
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,                        -- Auto-numbering and Primary Key constraint
    first_name VARCHAR(50) NOT NULL,                      -- Cannot be empty
    last_name VARCHAR(50),                                -- Can be empty
    email VARCHAR(100) UNIQUE NOT NULL,                   -- Must be present AND unique
    phone_number CHAR(10) UNIQUE,                         -- Must be unique
    age INT CHECK (age > 12),                             -- Custom condition
    current_status VARCHAR(20) DEFAULT 'active' 
        CHECK (current_status IN ('active', 'graduated', 'dropped_out', 'on_leave')), 
    masterji_handle VARCHAR(50) UNIQUE,
    has_joined_masterji BOOLEAN DEFAULT FALSE,            -- Default boolean
    current_score NUMERIC(5, 2) CHECK (current_score >= 0 AND current_score <= 100),
    enrollment_date DATE DEFAULT CURRENT_DATE             -- Date default
);

-- DDL Command: ALTER
ALTER TABLE students ADD COLUMN batch_name VARCHAR(50) DEFAULT 'Web Dev 2026';
```
