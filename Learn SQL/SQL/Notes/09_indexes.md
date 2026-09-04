# PERFORMANCE AND INDEXING

## Overview
This script demonstrates how indexes can drastically improve query performance on large tables. It sets up a table with 1,000,000 auto-generated rows.

## Key Concepts

**1. Generating Dummy Data:**
The `generate_series()` function combined with random hash values and math functions generates a massive amount of sample records quickly. This helps us test real-world scenarios for performance.

**2. EXPLAIN ANALYZE:**
Prepending a query with `EXPLAIN ANALYZE` tells PostgreSQL to explain the query plan (how it finds the data, such as a Sequential Scan) and provides the actual execution time. 
*Without an index, the database must scan all 1,000,000 records to find the matching row (Sequential Scan).*

**3. CREATE INDEX:**
An index (like an index in a book) creates a fast-lookup data structure (typically a B-Tree).
After running `CREATE INDEX`, running the `EXPLAIN ANALYZE` again will likely show an "Index Scan," and the execution time drops dramatically (often from tens of milliseconds down to sub-milliseconds).

**4. INCLUDE (Covering Index):**
```sql
CREATE INDEX idx_name ON marks (name) INCLUDE (marks);
```
Normally, an index only stores the indexed column (e.g., `name`) and a pointer to the main table. If your query asks for `marks` as well, it has to visit the main table to fetch it. By adding `INCLUDE (marks)`, the index itself stores the `marks` column too. This allows an "Index Only Scan," further boosting read performance because the database doesn't need to visit the main table at all.

---

## Full Example Code

```sql
CREATE TABLE marks (
    id serial primary key,
    name text,
    marks int not null
);

INSERT INTO marks (name, marks)
SELECT
    substr(
        translate(
            md5(random()::text || gs::text),
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ),
        1,
        12
    ) AS name,
    floor(random() * 100 + 1)::int AS marks

FROM generate_series(1, 1000000) AS gs;

SELECT * FROM marks;

explain analyze SELECT marks FROM marks WHERE name = '809E15792322';

DROP INDEX IF EXISTS idx_name;
CREATE INDEX idx_name ON marks (name);
CREATE INDEX idx_name ON marks (name) INCLUDE (marks); -- non-key column for covering index
```