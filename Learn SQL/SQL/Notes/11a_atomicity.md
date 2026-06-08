# ACID PROPERTIES: A - ATOMICITY (All or Nothing)

## Concept
Atomicity guarantees that a transaction is treated as a single, indivisible unit of work.
Either **ALL** operations in the transaction complete successfully, or **NONE** of them do. 
If any part of the transaction fails, the entire transaction fails, and the database is left completely unchanged (Rolled back).

## Scenario: Bank Transfer
Transferring funds involves two steps:
1. Deduct funds from Account A.
2. Add funds to Account B.

If the database crashes or an error (like division by zero) occurs right after Step 1, Step 2 is never executed. 
Because of **Atomicity**, the database realizes the transaction did not fully complete, so it forces a `ROLLBACK`. This prevents a scenario where money disappears from Account A but never arrives in Account B.

---

## Full Example Code

```sql
-- (Assumes `accounts` table from 10_transations.sql exists)
-- Scenario: Transfer 200 from Shubham to Hitesh.

BEGIN;

    -- Step 1 succeeds.
    UPDATE accounts SET balance = balance - 200 WHERE owner = 'Shubham';
    
    -- Let's simulate a crash or a severe error occurring right here!
    -- Since the next instruction crashes or the database server falls over,
    -- Step 2 never completes.
    
    SELECT 1 / 0; -- Simulates an error (Division by zero)
        
ROLLBACK; 

SELECT * FROM accounts;
```