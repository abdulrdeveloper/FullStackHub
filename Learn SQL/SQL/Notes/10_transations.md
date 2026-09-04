# CLASS 2: TOPIC 5 - TRANSACTIONS (ACID)

## Overview
A transaction is a way to bundle multiple SQL operations into a single unit of work.

## Transaction States

**1. THE HAPPY PATH (Successful Transfer)**
*   `BEGIN;` - Opens a new active transaction block.
*   Statements - You perform your standard inserts/updates/deletes.
*   `COMMIT;` - Applies all changes permanently to the database.

**2. THE FAILURE PATH (Rollback)**
*   `BEGIN;` - Opens a new active transaction block.
*   Statements - One or more statements fail (e.g., constraint violation, power loss).
*   `ROLLBACK;` - Undoes all commands that were issued since `BEGIN`. Nothing is saved.

## What is ACID?
Database transactions are built on the **ACID** principles:
*   **Atomicity:** All-or-nothing. Either the entire transaction succeeds, or it fails and leaves no trace.
*   **Consistency:** A transaction can only bring the database from one valid state to another valid state, respecting all rules and constraints.
*   **Isolation:** Concurrent transactions do not interfere with each other, making it appear as if they execute sequentially.
*   **Durability:** Once a transaction is committed, it will not be lost due to subsequent failures (power loss, system crash).

---

## Full Example Code

```sql
-- ----------------------------------------------------
-- SETUP: Bank Accounts Table
-- ----------------------------------------------------
DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    owner VARCHAR(50),
    balance INT CHECK (balance >= 0) -- Constraint: No overdraft!
);

INSERT INTO accounts (owner, balance) VALUES 
('Shubham', 1000),
('Hitesh', 1000);

-- ====================================================
-- 1. THE HAPPY PATH (Successful Transfer)
-- ====================================================
-- Transfer 500 from Shubham to Hitesh.

BEGIN; -- Start Transaction

    -- Step 1: Deduct
    UPDATE accounts SET balance = balance - 500 WHERE owner = 'Shubham';
    
    -- Step 2: Add
    UPDATE accounts SET balance = balance + 500 WHERE owner = 'Hitesh';

COMMIT; -- Save Changes

-- Check balances (Should be 500, 1500)
SELECT * FROM accounts;

-- ====================================================
-- 2. THE FAILURE PATH (Rollback)
-- ====================================================
-- Try to transfer 5000 from Shubham (Balance only 500).

BEGIN;

    -- Step 1: Deduct (This will fail constraint CHECK(balance >= 0))
    -- But let's assume we didn't have that check for a second, or some other error happened.
    UPDATE accounts SET balance = balance - 5000 WHERE owner = 'Shubham';
    
    -- Imagine an error happens here (e.g., Power failure).
    -- If we don't COMMIT, nothing is saved.
    
    -- We can manually trigger an undo:
    ROLLBACK; 

-- Check balances (Should remain 500, 1500 - unchanged)
SELECT * FROM accounts;
```