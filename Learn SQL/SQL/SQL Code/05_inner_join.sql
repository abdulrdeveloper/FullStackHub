DROP TABLE IF EXISTS internships;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    branch VARCHAR(50)
);

CREATE TABLE internships (
    internship_id SERIAL PRIMARY KEY,

    student_id INT REFERENCES students(student_id) ON DELETE SET NULL, -- Keeps the internship but removes the student link

    company_name VARCHAR(100),
    role VARCHAR(50),
    stipend INT,
    status VARCHAR(20)
);

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

SELECT 
    ROW_NUMBER() OVER (ORDER BY internship_id) AS serial_number, 
    * 
FROM internships;

SELECT 
    ROW_NUMBER() OVER (ORDER BY student_id) AS serial_number, 
    * 
FROM students;

SELECT 
    ROW_NUMBER() OVER (ORDER BY students.student_id) AS serial_number,
    students.student_id,
    students.name,
    students.branch,
    internships.company_name,
    internships.role,
    internships.stipend
FROM internships
INNER JOIN students ON students.student_id = internships.student_id;

-- With Aliases (Cleaner code)
SELECT 
    s.name, 
    s.branch, 
    i.company_name,
    i.status
FROM students s
JOIN internships i ON s.student_id = i.student_id;


-- Get All tables of Students and internships with Left Join