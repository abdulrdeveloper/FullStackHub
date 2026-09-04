# CLASS 2: TOPIC 2 - RIGHT JOIN

*(Assumes tables `students` and `internships` from 05_inner_join.sql exist)*

## 1. RIGHT JOIN

**Definition:** 
Returns **ALL** records from the Right table, and matched records from the Left table. If no match is found, returns `NULL` for the left side.

**Use Case:** 
"Show me all internships, and tell me which student applied for them."

*Note on Data:* 
To demonstrate Right Join properly, you would have an internship record without a valid student (an "orphan" record). If your Foreign Key constraints prevent this, all internships will have valid students and this query gives the same result as an Inner Join. 

## Why is RIGHT JOIN rarely used? 
Generally, `RIGHT JOIN` is rarely used in practice because developers prefer to simply flip the order of tables and use `LEFT JOIN`. It reads more naturally from top-to-bottom and left-to-right. 

Because of this, you typically rewrite a Right Join as a Left Join by swapping the tables.

---

## 3. Full Example Code

```sql
SELECT 
    s.name, 
    s.branch,
    i.company_name, 
    i.role,
    i.stipend 
FROM students s
RIGHT JOIN internships i ON s.student_id = i.student_id;

SELECT 
    s.name, 
    s.branch,
    i.company_name, 
    i.role,
    i.stipend
FROM internships i
LEFT JOIN students s ON i.student_id = s.student_id;
```