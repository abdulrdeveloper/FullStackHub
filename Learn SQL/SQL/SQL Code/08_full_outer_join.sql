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
