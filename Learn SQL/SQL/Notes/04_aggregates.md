# SQL Aggregate Functions and GROUP BY

In this guide, we tackle SQL's built-in math and summarization features called Aggregate functions alongside grouping abilities.

## 1. What are Aggregate Functions?
Aggregate functions perform a calculation on a set of values (a whole column) and return **one single summarizing value**.

* **`COUNT()`**: Returns the total number of rows that match a specified criterion.
* **`SUM()`**: Calculates the total mathematical sum of a numeric column.
* **`AVG()`**: Calculates the average mathematical value of a numeric column.
* **`MIN()`**: Returns the absolute smallest/lowest value of a selected column.
* **`MAX()`**: Returns the absolute largest/highest value of a selected column.

## 2. Using GROUP BY
Aggregate functions usually treat the whole table as one big group. But what if you want the `SUM` of sales *per brand*, or the `COUNT` of watches *per city*?
That’s where **`GROUP BY`** comes in.

It groups rows that have the same values into summary rows, enabling aggregates to process each group separately instead of the whole table at once.

## 3. HAVING vs WHERE
* **`WHERE`** can only filter raw individual rows *before* they are grouped.
* **`HAVING`** is explicitly designed to filter rows *after* the `GROUP BY` operation and aggregate calculations are done (e.g. `SUM(price) > 5`).

---

## 4. Full Example Code

```sql
-- ----------------------------------------------------
-- 1. Basic Aggregations
-- ----------------------------------------------------
-- COUNT: How many total records do we have?
SELECT COUNT(*) AS total_transactions FROM smart_watch_sales;

-- SUM: What is the total combined metrics?
SELECT SUM(units_sold * price_per_unit) AS total_revenue FROM smart_watch_sales;

-- AVG: What is the average value?
SELECT AVG(price_per_unit) AS avg_watch_price FROM smart_watch_sales;

-- MIN / MAX: Identify extremes
SELECT MIN(price_per_unit) AS cheapest, MAX(price_per_unit) AS costliest FROM smart_watch_sales;

-- ----------------------------------------------------
-- 2. GROUP BY (The Data Powerhouse)
-- ----------------------------------------------------
-- Sales by Brand
SELECT brand, SUM(units_sold) AS total_units_sold
FROM smart_watch_sales
GROUP BY brand
ORDER BY total_units_sold DESC;

-- Revenue by Region
SELECT city, SUM(units_sold * price_per_unit) AS city_revenue
FROM smart_watch_sales
GROUP BY city
ORDER BY city_revenue DESC;

-- Multi-Level Grouping (Brand sales within each City)
SELECT city, brand, SUM(units_sold) AS units
FROM smart_watch_sales
GROUP BY city, brand
ORDER BY city ASC, units DESC;

-- ----------------------------------------------------
-- 3. HAVING (Filtering Created Groups)
-- ----------------------------------------------------
-- Show brands that have sold more than 20 units total:
SELECT brand, SUM(units_sold) AS total_units, MAX(price_per_unit)
FROM smart_watch_sales
GROUP BY brand
HAVING SUM(units_sold) > 20;

-- Show cities with an average sale price above 10,000 (Premium Markets):
SELECT city, AVG(price_per_unit) AS avg_price
FROM smart_watch_sales
GROUP BY city
HAVING AVG(price_per_unit) > 10000;
```
