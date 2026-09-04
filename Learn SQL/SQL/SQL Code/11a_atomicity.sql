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
