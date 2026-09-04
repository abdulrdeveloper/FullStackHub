# ACID PROPERTIES: I - ISOLATION (No spying on WIP)

## Concept
Isolation ensures that concurrent transactions behave as if they are executing sequentially.
A transaction in progress should be invisible to other transactions until it is fully committed. This prevents "Dirty Reads" (reading half-finished, uncommitted data).

## Scenario
Two users are interacting with the database simultaneously (e.g., in two different terminal windows):
*   **Terminal 1 (User A):** Begins a transaction, updates a balance (e.g., deducting 300), but does **NOT** commit yet.
*   **Terminal 2 (User B):** Queries the balance of that exact same account simultaneously.

**What does User B see?**
Thanks to Isolation, User B sees the original balance, *not* the deducted balance. They are isolated from User A's uncommitted ("dirty") changes. 
Once User A executes `COMMIT;`, the changes become public, and User B will then see the updated balance.

If User B had seen the uncommitted balance and User A ended up rolling back, User B would have been misled with false data!

---

## Full Example Code

```sql
-- (Assumes `accounts` table from 10_transations.sql exists)
-- Open two terminal windows connecting to the same DB to test this.

-- ----------------------------------------------------
-- TERMINAL 1 (User A)
-- ----------------------------------------------------
BEGIN; 

    -- User A starts transferring 300 to Hitesh
    UPDATE accounts SET balance = balance - 300 WHERE owner = 'Shubham';
    
    -- In User A's view (inside this transaction block), Shubham's balance is now 700.
    SELECT balance FROM accounts WHERE owner = 'Shubham'; -- Returns 700

-- Wait... User A hasn't committed yet!

-- ----------------------------------------------------
-- TERMINAL 2 (User B)
-- ----------------------------------------------------
    -- User B checks the balance.
    SELECT balance FROM accounts WHERE owner = 'Shubham'; 

-- ----------------------------------------------------
-- TERMINAL 1 (User A)
-- ----------------------------------------------------
COMMIT; -- User A finalizes the transaction.

-- ----------------------------------------------------
-- TERMINAL 2 (User B)
-- ----------------------------------------------------
-- Now if User B checks again...
    SELECT balance FROM accounts WHERE owner = 'Shubham';
```