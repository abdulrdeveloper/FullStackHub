-- (Assumes `accounts` table from 10_transations.sql exists)
-- Constraint: balance INT CHECK (balance >= 0)

-- Scenario: Shubham tries to transfer 5000 to Hitesh.
BEGIN;

    -- Step 1: Trying to deduct 5000 from Shubham.
    -- His balance would become 1000 - 5000 = -4000.
    -- This violates the CHECK (balance >= 0) constraint!
    UPDATE accounts SET balance = balance - 5000 WHERE owner = 'Shubham';
    
    UPDATE accounts SET balance = balance + 5000 WHERE owner = 'Hitesh'; -- This won't have any effect.

ROLLBACK;

SELECT * FROM accounts;
