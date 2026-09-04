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
