# SQL SELECT Queries (Data Query Language - DQL)

In this guide, we explore **DQL (Data Query Language)**, which revolves around the **`SELECT`** statement used to query and retrieve data.

## 1. The Power of SELECT
The `SELECT` command fetches data. Use `*` for all columns, or specify column names (e.g., `SELECT name, team`) for precise results.

## 2. Filtering with WHERE
The `WHERE` clause filters data based on conditions.
* **Basic Operators**: `=`, `>`, `<`, `>=`, `<=`, `!=`
* **Logical Operators**: `AND`, `OR`
* **`IN (a, b)`**: Matches if the value is in the list.
* **`BETWEEN x AND y`**: Range filtering.
* **`IS NULL` / `IS NOT NULL`**: Checks for empty records.

## 3. Pattern Matching (LIKE)
* **`%`**: Represents zero or multiple characters.
* **`_`**: Represents exactly one character.
* **`LIKE`** is case-sensitive, **`ILIKE`** is case-insensitive.

## 4. Sorting & Limiting
* **`ORDER BY column ASC/DESC`**: Sorts the retrieved data.
* **`LIMIT n`**: Restricts the maximum number of rows.
* **`OFFSET n`**: Skips the first n rows (useful for pagination).

---

## 5. Full Example Code

```sql
SELECT * FROM ipl_players;
SELECT name, nickname, team, auction_price_crores FROM ipl_players;

-- Basic WHERE Filters
SELECT * FROM ipl_players WHERE team = 'Mumbai Indians';

-- AND / OR
SELECT * FROM ipl_players WHERE role = 'All-Rounder' AND wickets_taken > 10;
SELECT * FROM ipl_players WHERE team = 'CSK' OR team = 'RCB';

-- BETWEEN / IN / IS NULL
SELECT * FROM ipl_players WHERE auction_price_crores BETWEEN 5 AND 12;
SELECT * FROM ipl_players WHERE team NOT IN ('Mumbai Indians', 'CSK', 'RCB');

-- Pattern Matching (LIKE)
SELECT * FROM ipl_players WHERE name LIKE 'R%';     -- Starts with R
SELECT * FROM ipl_players WHERE name ILIKE '__R%';  -- Third letter is R/r

-- Sorting, Limits and Offset
SELECT name, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 3 OFFSET 3;

-- DISTINCT
SELECT DISTINCT role FROM ipl_players;
```
