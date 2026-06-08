# SQL Joins & Foreign Keys

In this guide, we will understand how to connect multiple tables using **Foreign Keys** and how to extract data from them together using **INNER JOIN**.

## 1. What is a Foreign Key?
A **Foreign Key** is a column (or combinations of columns) that establishes a link between the data in two tables. It ensures **Referential Integrity**—meaning the connection between tables remains consistent. 

A Foreign Key in one table points to a Primary Key in another table, preventing you from adding data that doesn't have a valid connection.

### Foreign Key Constraints (What happens when a linked record is deleted?)
When you delete or update a record in the main/parent table (e.g., `students`), you have to tell SQL what to do with the linked records in the child table (e.g., `internships`).

Here are the standard options:
1. **`ON DELETE CASCADE`**: If a parent record (Student) is deleted, all its linked child records (Internships) are automatically deleted.
2. **`ON DELETE SET NULL`**: If a parent record is deleted, the child records are kept, but their foreign key column is marked as `NULL` (Empty).
3. **`ON DELETE RESTRICT` (Default)**: If a parent record has active child records, SQL will throw an error and completely prevent you from deleting the parent record.
4. **`ON UPDATE CASCADE`**: If the Parent's Primary Key changes, the change is automatically updated in all child records.

**Example Syntax:**
```sql
student_id INT REFERENCES students(student_id) ON DELETE SET NULL
```

---

## 2. What is an INNER JOIN?
An **INNER JOIN** selects records that have matching values in **both** tables.

If a student has not applied for an internship, or if an internship isn't linked to a valid student, `INNER JOIN` will simply ignore them and hide them from the final output. It only shows the exact matches (the intersection).

### Using Aliases (Make code cleaner)
When joining tables, using full table names (`students.student_id = internships.student_id`) can get very long. We use **Aliases** (`s` and `i`) as nicknames to cleanly reference tables.

---

## 3. Full Example Code

Here is the clean database structure, dummy data, and query to practice:

```sql
-- 1. Create the Parent Table (Students)
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    branch VARCHAR(50)
);

-- 2. Create the Child Table (Internships) with a Foreign Key
CREATE TABLE internships (
    internship_id SERIAL PRIMARY KEY,
    
    -- The Foreign Key linking to the 'students' table
    student_id INT REFERENCES students(student_id) ON DELETE SET NULL, 
    
    company_name VARCHAR(100),
    role VARCHAR(50),
    stipend INT,
    status VARCHAR(20)
);

-- 3. Insert Data
INSERT INTO students (name, email, branch) VALUES 
('Priya', 'priya@gmail.com', 'Mechanical'), 
('Sneha', 'sneha@yahoo.com', 'Information Tech'),
('Amit', 'amit@hotmail.com', 'Electronics'),
('Rahul', 'rahul@gmail.com', 'Computer Science'),
('Rohan', 'rohan@outlook.com', 'Civil'); 

INSERT INTO internships (student_id, company_name, role, stipend, status) 
VALUES 
(1, 'Google', 'Software Engineering Intern', 100000, 'Selected'), 
(1, 'Microsoft', 'SDE Intern', 85000, 'Selected'), 
(2, 'Amazon', 'Data Analyst Intern', 60000, 'Pending'), 
(3, 'TCS', 'System Engineer Intern', 20000, 'Selected'), 
(5, 'OpenAI', 'AI Researcher', 150000, 'Selected');

-- 4. The INNER JOIN Query (Using ROW_NUMBER for a clean serial counter and table aliases)
SELECT 
    ROW_NUMBER() OVER (ORDER BY s.student_id) AS serial_number,
    s.student_id,
    s.name,
    s.branch,
    i.company_name,
    i.role,
    i.stipend
FROM students s
INNER JOIN internships i ON s.student_id = i.student_id;
```
