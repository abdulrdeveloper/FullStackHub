# ACID PROPERTIES: D - DURABILITY (Written in stone)

## Concept
Durability guarantees that once a transaction has been **COMMITTED**, its changes are completely and permanently saved. 
Even if the server loses power, crashes, or the database system restarts a millisecond after the `COMMIT` succeeds, the data is safe and will not be lost.

## How it works (Under the Hood)
When a transaction is committed, before the database returns a "Success" message back to your application, the changes actully get written to non-volatile physical storage (often into a structure called the **Write-Ahead Log** or WAL).

If a disaster strikes (server panic, power unplugged) immediately post-commit, upon restart, PostgreSQL runs crash recovery routines. It checks the WAL, realizes there was a committed transaction not fully flushed to the main tables, and replays the log to restore the state exactly as it was.

---

## Full Example Code

```sql
-- (Assumes `accounts` table from 10_transations.sql exists)

-- Scenario: Shubham transfers 400 to Hitesh.
BEGIN;

    UPDATE accounts SET balance = balance - 400 WHERE owner = 'Shubham';
    UPDATE accounts SET balance = balance + 400 WHERE owner = 'Hitesh';
    
COMMIT;

SELECT * FROM accounts;
```