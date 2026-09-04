-- Drop table if exists users;
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(322) NOT NULL UNIQUE,
--     phone_number CHAR(20) NOT NULL UNIQUE,
--     age INT CHECK (age >= 20),
--     country VARCHAR(50) DEFAULT 'Unknown',
--     city VARCHAR(50) DEFAULT 'Unknown'
-- );

-- Drop table if exists orders;
-- CREATE TABLE orders (
--     id SERIAL PRIMARY KEY,
--     user_id INT NOT NULL,
--     product VARCHAR(100) NOT NULL,
--     quantity INT CHECK (quantity > 0)
-- );

-- ALTER TABLE users ADD COLUMN price DECIMAL(10, 2) DEFAULT 0.00;

-- INSERT INTO users (name, email, phone_number, age, country, city, price)
-- VALUES 
-- ('Alice Johnson','alice.johnson@example.com','+1-202-555-0143',28,'USA','Washington', 100.00),
-- ('Bob Smith','bob.smith@example.co.uk','+44-20-7946-0958',35,'UK','London', 150.00),
-- ('Carlos Mendes','carlos.mendes@example.com.br','+55-11-91234-5678',40,'Brazil','Sao Paulo', 200.00),
-- ('Diana Rossi','diana.rossi@example.it','+39-02-1234-5678',22,'Italy','Milan', 120.00),
-- ('Emma Lee','emma.lee@example.kr','+82-2-312-3456',30,'South Korea','Seoul', 180.00),
-- ('Faisal Khan','faisal.khan@example.pk','+92-21-3456789',45,'Pakistan','Karachi', 250.00),
-- ('Grace Chen','grace.chen@example.cn','+86-10-5555-1212',26,'China','Beijing', 300.00),
-- ('Henry O''Neill','henry.oneill@example.ie','+353-1-670-7000',38,'Ireland','Dublin', 160.00),
-- ('Isabella Garcia','isabella.garcia@example.es','+34-91-123-4567',24,'Canada','Madrid', 140.00),
-- ('Jamal Brown','jamal.brown@example.com','+1-310-555-0199',29,'USA','Los Angeles', 190.00),
-- ('Katya Ivanova','katya.ivanova@example.ru','+7-495-123-4567',31,'Russia','Moscow', 210.00),
-- ('Liam O''Brien','liam.obrien@example.au','+61-2-9374-4000',27,'Australia','Sydney', 170.00),
-- ('Maria Silva','maria.silva@example.pt','+351-21-123-4567',36,'Portugal','Lisbon', 220.00),
-- ('Noah Müller','noah.mueller@example.de','+49-30-12345678',33,'Germany','Berlin', 230.00),
-- ('Olivia Martin','olivia.martin@example.fr','+33-1-4222-7000',23,'France','Paris', 130.00);

-- INSERT INTO orders (user_id, product, quantity)
-- VALUES 
-- (1, 'Laptop', 1),
-- (2, 'Smartphone', 2),
-- (3, 'Headphones', 3),
-- (4, 'Monitor', 1),
-- (5, 'Keyboard', 2),
-- (6, 'Mouse', 1),
-- (7, 'Printer', 1),
-- (8, 'Webcam', 2),
-- (9, 'External Hard Drive', 1),
-- (10, 'USB Flash Drive', 3);


-- =================================================
--------          QUERYING DATA          -----------
-- =================================================



-- All the data from the users table is selected and displayed.
-- SELECT * FROM users;

-- -- Specific columns selected
-- SELECT id, name, email FROM users;

-- -- It removes duplicates and shows only unique countries from the users table.
-- SELECT DISTINCT country FROM users;

-- -- Set limit 
-- SELECT * FROM users LIMIT 5;

-- -- changed names and locations
-- SELECT name AS customer_name , country AS location FROM users;



-- ==============================================
--------          SORTING DATA          ---------
-- ==============================================



-- -- Ascending order by price
-- SELECT * FROM users ORDER BY price ASC;
-- SELECT name, country, age FROM users ORDER BY country, age ASC;

-- -- Descending order by price + new alias added for price column , but both original price and alias are displayed in the result set.
-- SELECT *, price AS Highest_Price FROM users ORDER BY Highest_Price DESC;

-- Filtering data with WHERE clause
-- SELECT * FROM users WHERE country = 'USA';
-- SELECT name, age FROM users WHERE age > 35;



-- =================================================
-----            FILTERING DATA             --------
-- =================================================



-- -- Using AND operator to filter data
-- SELECT name,country, age FROM users WHERE country = 'USA' AND age < 32;

-- -- Using OR operator to filter data
-- SELECT name, country FROM users WHERE country = 'Canada' OR country = 'UK';

-- -- Using IN operator to filter data
-- SELECT name, country FROM users WHERE country IN ('USA', 'Canada', 'UK');

-- -- Using NOT IN operator to filter data
-- SELECT name, country FROM users WHERE country NOT IN ('USA', 'Canada');

-- -- Using BETWEEN operator to filter data
-- SELECT name, price FROM users WHERE price BETWEEN 20 AND 100;

-- -- Using LIKE operator to filter data
-- SELECT name,email FROM users WHERE name LIKE 'A%';

-- -- Using IS NULL operator to filter data
-- SELECT name,phone_number FROM users WHERE phone_number is NULL;

-- -- Using IS NOT NULL operator to filter data
-- SELECT name,phone_number FROM users WHERE phone_number IS NOT NULL;



-- ================================================
-------          Joining TABLES            --------
-- ================================================



-- DROP TABLE IF EXISTS orders;
-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     id INT PRIMARY KEY,
--     name VARCHAR(50),
--     country VARCHAR(50) DEFAULT 'Unknown'
-- );

-- CREATE TABLE orders (
--     id INT PRIMARY KEY,
--     user_id INT,
--     product VARCHAR(50),
--     quantity INT CHECK (quantity > 0),
--     price DECIMAL(10, 2) DEFAULT 0.00
-- );

-- INSERT INTO users (id, name, country) VALUES
-- (1, 'Ali', 'USA'),
-- (2, 'Sara', 'Canada'),
-- (3, 'John', 'UK'),
-- (4, 'Emma', 'USA'),
-- (5, 'Liam', 'Australia');

-- INSERT INTO orders (id, user_id, product, quantity, price) VALUES
-- (1, 1, 'Laptop', 3, 999.99),
-- (2, 2, 'Phone', 2, 599.99),
-- (3, 2, 'Mouse', 1, 29.99),
-- (4, 5, 'Tablet', 1, 399.99);

-- -- =========================
-- -- INNER JOIN (only matches)
-- -- =========================

-- SELECT orders.id, users.name, users.country 
-- FROM orders JOIN users 
-- ON orders.user_id = users.id 
-- WHERE users.country = 'USA';

-- -- JOIN = INNER JOIN (same cheez)

-- SELECT users.name, orders.product
-- FROM users
-- INNER JOIN orders
-- ON users.id = orders.user_id;

-- -- =========================
-- -- LEFT JOIN (all users)
-- -- =========================

-- SELECT users.name, orders.product
-- FROM users
-- LEFT JOIN orders
-- ON users.id = orders.user_id;

-- -- =========================
-- -- RIGHT JOIN (all orders)
-- -- =========================

-- SELECT users.name, orders.product
-- FROM users
-- RIGHT JOIN orders
-- ON users.id = orders.user_id;

-- -- =========================
-- -- FULL OUTER JOIN (all orders and all users)
-- -- =========================

-- SELECT users.name, orders.product
-- FROM users
-- FULL OUTER JOIN orders
-- ON users.id = orders.user_id;




-- ================================================
-------          Grouping TABLES            --------
-- ================================================



-- SELECT COUNT(*) FROM orders;                               -- counts all the rows
-- SELECT SUM(quantity) FROM orders;                          -- sums all the quantity column
-- SELECT AVG(quantity) FROM orders;                          -- calculates the average quantity
-- SELECT MAX(price) FROM orders;                             -- finds the maximum price
-- SELECT MIN(price) FROM orders;                             -- finds the minimum price
-- SELECT MAX(price), MIN(price) FROM orders;                 -- finds both maximum and minimum price
-- SELECT country, COUNT(*) FROM users GROUP BY country;      -- shows the total number of users in each country, combining users from the same country into one group 
-- SELECT DISTINCT country FROM users;                        -- gets all unique countries from the users table, without counting how many users are in each country
-- SELECT country, COUNT(*) FROM users GROUP BY country HAVING COUNT(*) >= 2;       -- shows only those countries that have more than or equal to 2 users,


-- ================================================
--          SUBQUERIES (Nested Queries)          --
-- ================================================


-- SELECT product, price 
-- FROM orders
-- WHERE price > (SELECT AVG(price) FROM orders);       -- the inner query calculates the average price of all orders, and the outer query shows only those products whose price is greater than that average price.

-- SELECT COUNT(*) FROM (SELECT * FROM users WHERE country = 'USA');    -- the inner query selects all users from the USA, and the outer query counts how many users are in that result set.

-- SELECT country FROM users UNION SELECT product FROM orders;     -- it will combine and will give a list of all unique countries from the users table and all unique products from the orders table, without duplicates.

-- SELECT country FROM users UNION ALL SELECT product FROM orders;     -- It will not give unique values, it will give all the values from both tables, including duplicates.



-- ================================================
------            MODIFYING DATA           --------
-- ================================================


-- -- simple insert to add a new user
-- INSERT INTO users(name, email, phone_number, age, country, city, price)
-- VALUES
-- ('Zara Ali','zara@example.com','123-456-7890',25,'USA','New York',100.00);


-- -- Multiple rows inserted into users table
-- INSERT INTO users(name, email, phone_number, age, country, city, price)
-- VALUES 
-- ('Zara Ali','zara@example.com','123-456-7890',25,'USA','New York',100.00),
-- ('Liam O''Brien','liam@example.com','098-765-4321',30,'Canada','Toronto',150.00);


-- -- Update a user's email and phone number based on their name
-- UPDATE users
-- SET email = 'newemail@example.com', phone_number = '000-000-0000'
-- WHERE name = 'Zara Ali';


-- UPDATE with JOIN to update price in users table based on orders table

-- UPDATE users
-- SET price = price + 50
-- FROM orders
-- WHERE users.id = orders.user_id;

-- Delete a user 
-- DELETE FROM users
-- WHERE name = 'Liam O','Brien';

-- DELETE FROM orders             -- Delete records from the present table
-- WHERE status IS NULL;

-- DELETE FROM orders             -- Deletes all records from the reference table, but the table structure remains intact.
-- USING users
-- WHERE orders.user_id = users.id;


-- use for temporary result set and can be referenced within the main query, making it easier to organize complex queries and improve readability.
WITH usa_users AS (
    SELECT * FROM users WHERE country = 'USA'
)
SELECT * FROM usa_users;



-- =================================================
-----        DATA TYPES & CONSTRAINTS         ------
-- ==========================-======================



-- INTEGER / INT: stores whole numbers only (no decimals). Used for age, counts, quantities, and IDs. Example: 10, 200, -5

-- SERIAL: auto-incrementing integer. Automatically increases value for each new row. Mostly used for primary key IDs.

-- VARCHAR(n): stores short text with a maximum length limit (n characters). If text is longer, it gets rejected or cut. Used for names, emails, codes.

-- TEXT: stores long text without a fixed limit. Good for descriptions, comments, articles, or large content.

-- DECIMAL(p,s): stores exact decimal numbers. p = total digits, s = digits after decimal. Best for money because it avoids rounding errors.

-- DATE: stores only date values in format YYYY-MM-DD. Does not include time. Used for birth dates, order dates, and events.

-- PRIMARY KEY: uniquely identifies each row in a table. Cannot be NULL or duplicated. Every table should have one primary key.

-- FOREIGN KEY: creates a relationship between two tables. It references the primary key of another table and ensures data integrity.
