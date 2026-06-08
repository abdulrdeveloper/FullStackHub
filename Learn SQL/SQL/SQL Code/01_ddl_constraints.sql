-- ============================================================================
-- NOTE: This is the clean, executable version.
-- For a detailed summary, explanations, and concepts, please see the 
-- documentation file: Notes/01_ddl_constraints.md
-- ============================================================================

DROP TABLE IF EXISTS students;

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number CHAR(10) UNIQUE,
    age INT CHECK (age > 12),
    current_status VARCHAR(20) DEFAULT 'active' CHECK (current_status IN ('active', 'graduated', 'dropped_out', 'on_leave')),
    masterji_handle VARCHAR(50) UNIQUE,
    has_joined_masterji BOOLEAN DEFAULT FALSE,
    current_score NUMERIC(5, 2) CHECK (current_score >= 0 AND current_score <= 100),
    enrollment_date DATE DEFAULT CURRENT_DATE
);

INSERT INTO students (first_name, last_name, email, phone_number, age, current_status, masterji_handle, has_joined_masterji, current_score)
VALUES ('John', 'Doe', 'john.doe@example.com', '9876543210', 22, 'active', '@john_codes', TRUE, 85.50);

SELECT * FROM students;

ALTER TABLE students ADD COLUMN batch_name VARCHAR(50) DEFAULT 'Web Dev 2026';
