# SQL DML (Data Manipulation Language) Operations 

In this guide, we cover the core of modifying everyday database records using **DML**. 

## 1. What is DML?
**DML (Data Manipulation Language)** deals specifically with manipulating or modifying the actual *Data* stored inside the tables. Unlike DDL (which works on the table structure), DML only works on the rows inside those structures (the content).

Common DML Commands:
1. **`INSERT`**: Add brand new rows into a table.
2. **`UPDATE`**: Modify or alter existing values inside existing rows.
3. **`DELETE`**: Remove specific rows from a table entirely.

## 2. Danger of UPDATE and DELETE
**Always use WHERE with UPDATE & DELETE!** 
If you forget to include a `WHERE` condition when using `UPDATE` or `DELETE`, SQL will blindly apply the change to **EVERY SINGLE ROW** in the table at once. You could wipe your entire data unintentionally!

---

## 3. Full Example Code

```sql
-- ----------------------------------------------------
-- 1. INSERT (The 'C' in CRUD)
-- ----------------------------------------------------
-- A. Insert Single Row
INSERT INTO canteen_menu (item_name, category, price) 
VALUES ('Vada Pav', 'Snacks', 15);

-- B. Insert Multiple Rows at Once (Bulk Insert)
INSERT INTO canteen_menu (item_name, category, price) VALUES 
('Masala Chai', 'Beverages', 10),
('Samosa', 'Snacks', 12),
('Rajma Chawal', 'Meals', 60),
('Maggi', 'Snacks', 25),
('Ice Tea', 'Beverages', 40);

-- ----------------------------------------------------
-- 2. UPDATE (The 'U' in CRUD)
-- ----------------------------------------------------
-- Single target update
UPDATE canteen_menu 
SET price = 20 
WHERE item_name = 'Vada Pav';

-- Bulk Update / Mathematical update
UPDATE canteen_menu
SET price = price - 5
WHERE category = 'Beverages';

-- Boolean Status Update
UPDATE canteen_menu
SET is_available = FALSE
WHERE item_name = 'Samosa';

-- ----------------------------------------------------
-- 3. DELETE (The 'D' in CRUD)
-- ----------------------------------------------------
-- Delete a specific item
DELETE FROM canteen_menu 
WHERE item_name = 'Cold Coffee';

-- Delete based on conditions
DELETE FROM canteen_menu 
WHERE price > 50;

-- ☠️ THE DANGER ZONE ☠️
-- The following command completely rips out all rows of the table:
-- DELETE FROM canteen_menu;
```
