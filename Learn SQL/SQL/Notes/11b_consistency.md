# ACID PROPERTIES: C - CONSISTENCY (Rules are rules)

*(Note: If you have atomicity and isolation, then consistency is generally guaranteed as well.)*

## Concept
Consistency ensures that a transaction can only bring the database from one **valid** state to another **valid** state. 
Any rules, constraints, cascades, and triggers defined on the database MUST be successfully applied. If a transaction tries to break a rule, it is immediately rejected.

## Scenario
Assume an account constraint: `CHECK (balance >= 0)`.
If a transaction attempts to transfer more money than an account has, the deduction would result in a negative balance. 
Since this violates the `CHECK` constraint, the database immediately throws an error:
`ERROR: new row for relation "accounts" violates check constraint "accounts_balance_check"`

In PostgreSQL, once an error occurs within a transaction block, subsequent operations are ignored, and you **MUST** `ROLLBACK`. The database refused the inconsistent (negative) state, maintaining complete data integrity.

---

## Full Example Code

```sql
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
```