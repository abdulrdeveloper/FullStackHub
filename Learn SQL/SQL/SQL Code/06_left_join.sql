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
