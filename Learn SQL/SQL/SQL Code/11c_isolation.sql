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
