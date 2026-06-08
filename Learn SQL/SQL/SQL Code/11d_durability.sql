-- (Assumes `accounts` table from 10_transations.sql exists)

-- Scenario: Shubham transfers 400 to Hitesh.
BEGIN;

    UPDATE accounts SET balance = balance - 400 WHERE owner = 'Shubham';
    UPDATE accounts SET balance = balance + 400 WHERE owner = 'Hitesh';
    
COMMIT;

SELECT * FROM accounts;
