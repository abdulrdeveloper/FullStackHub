-- ============================================================================
-- NOTE: This is the clean, executable version.
-- For a detailed summary, explanations, and concepts, please see the 
-- documentation file: Notes/03_dml_operations.md
-- ============================================================================

DROP TABLE IF EXISTS canteen_menu;

CREATE TABLE canteen_menu (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100),
    category VARCHAR(50),
    price INT,
    is_available BOOLEAN DEFAULT TRUE
);

INSERT INTO canteen_menu (item_name, category, price) VALUES ('Vada Pav', 'Snacks', 15);

INSERT INTO canteen_menu (item_name, category, price) VALUES 
('Masala Chai', 'Beverages', 10),
('Samosa', 'Snacks', 12),
('Rajma Chawal', 'Meals', 60),
('Maggi', 'Snacks', 25),
('Ice Tea', 'Beverages', 40);

SELECT * FROM canteen_menu;

UPDATE canteen_menu SET price = 20 WHERE item_name = 'Vada Pav';

UPDATE canteen_menu SET price = price - 5 WHERE category = 'Beverages';

UPDATE canteen_menu SET is_available = FALSE WHERE item_name = 'Samosa';

SELECT * FROM canteen_menu;

DELETE FROM canteen_menu WHERE item_name = 'Cold Coffee';

DELETE FROM canteen_menu WHERE price > 50;

SELECT * FROM canteen_menu;
