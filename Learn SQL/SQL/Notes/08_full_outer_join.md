# CLASS 2: TOPIC 2 - FULL OUTER JOIN

*(Assumes tables `students` and `internships` from 05_inner_join.sql exist)*

## 1. FULL OUTER JOIN

**Definition:** 
Returns **ALL** records when there is a match in either the Left table OR the Right table. If there is no match on one side, that missing side will contain `NULL`. 
It is essentially a combination of a `LEFT JOIN` and a `RIGHT JOIN`.

**Use Case:** 
"Give me a complete overview: All students (whether they have internships or not) AND all internships (whether they are linked to a student or not)."

**Expected behavior:**
1. Students with internships show full details.
2. Students without internships show `NULL` in internship fields.
3. Internships without a valid student_id (if possible) show `NULL` for student fields.

## 2. FINDING TOTALLY UNMATCHED RECORDS

**Use Case:** 
"Find ONLY the students without internships AND internships without students."

**Strategy:** 
Perform a `FULL OUTER JOIN` and add a `WHERE` clause to filter out the matching combinations (e.g., where `student_id IS NULL OR internship_id IS NULL`).

---

## 3. Full Example Code

```sql
SELECT 
    s.name AS student_name, 
    s.branch,
    i.company_name, 
    i.status 
FROM students s
FULL OUTER JOIN internships i ON s.student_id = i.student_id;

SELECT 
    s.name AS student_name, 
    i.company_name
FROM students s
FULL OUTER JOIN internships i ON s.student_id = i.student_id
WHERE s.student_id IS NULL OR i.internship_id IS NULL;
```