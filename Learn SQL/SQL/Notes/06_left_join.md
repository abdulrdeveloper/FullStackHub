# CLASS 2: TOPIC 2 - LEFT JOIN

*(Assumes tables `students` and `internships` from 05_inner_join.sql exist)*

## 1. LEFT JOIN (The "Inclusive" Join)

**Definition:** 
Returns **ALL** records from the Left table, and matched records from the Right table. If no match is found, it returns `NULL` for the right side.

**Use Case:** 
"Show me all students and their internship status (even if they haven't applied)."

**Key Concept:** 
When a match is not found on the right table, fields from the right table act as `NULL`. You can use the `COALESCE(column, fallback_value)` function to replace `NULL` with a default value like `'No Internship'` or `0`. Note how 'Priya' and 'Rohan' will appear with NULLs or defaults because they don't have internships.

## 2. FINDING DISCREPANCIES (Looking for NULLs)

**Use Case:** 
"Who are the students that currently DO NOT have any internships applied?"

**Strategy:** 
Use a `LEFT JOIN` and filter the results by checking where the primary/foreign key on the right side `IS NULL`.

---

## 3. Full Example Code

```sql
SELECT 
    s.name, 
    s.branch,
    COALESCE(i.company_name, 'No Internship') AS company_name,
    COALESCE(i.stipend, 0) AS stipend
FROM students s
LEFT JOIN internships i ON s.student_id = i.student_id;

SELECT s.name, s.email, s.branch, i.*
FROM students s
LEFT JOIN internships i ON s.student_id = i.student_id
WHERE i.internship_id IS NULL;
```