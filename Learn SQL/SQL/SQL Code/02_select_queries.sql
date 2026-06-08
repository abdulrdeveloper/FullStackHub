-- ============================================================================
-- NOTE: This is the clean, executable version.
-- For a detailed summary, explanations, and concepts, please see the 
-- documentation file: Notes/02_select_queries.md
-- ============================================================================

DROP TABLE IF EXISTS ipl_players;

CREATE TABLE ipl_players (
    player_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    team VARCHAR(50),
    role VARCHAR(50),
    runs_scored INT,
    wickets_taken INT,
    auction_price_crores DECIMAL(5, 2)
);

ALTER TABLE ipl_players ADD COLUMN nickname VARCHAR(50);

INSERT INTO ipl_players (name, team, role, runs_scored, wickets_taken, auction_price_crores, nickname) VALUES
('Virat Kohli', 'RCB', 'Batsman', 973, 0, 15.00, 'King Kohli'),
('MS Dhoni', 'CSK', 'Wicketkeeper', 450, 0, 12.00, 'Thala'),
('Jasprit Bumrah', 'Mumbai Indians', 'Bowler', 15, 27, 12.00, 'Jassi'),
('Hardik Pandya', 'Mumbai Indians', 'All-Rounder', 400, 15, 15.00, 'Kung Fu Pandya'),
('Sunil Narine', 'KKR', 'All-Rounder', 350, 20, 8.50, 'Carrom King'),
('Rohit Sharma', 'Mumbai Indians', 'Batsman', 550, 0, 16.00, 'Hitman'),
('Rashid Khan', 'Gujarat Titans', 'Bowler', 50, 19, 15.00, 'The Magician'),
('Rinku Singh', 'KKR', 'Batsman', 475, 0, 0.55, 'The Spirit'),
('Arjun Tendulkar', 'Mumbai Indians', 'Bowler', 10, 3, 0.30, 'Arjun'),
('Kane Williamson', 'LSG', 'Batsman', 600, 0, 11.00, 'Kane Mama'),
('Mystery Player', NULL, 'Batsman', 0, 0, 1.00, 'Mystery Man');

SELECT * FROM ipl_players;
SELECT name, nickname, team, auction_price_crores FROM ipl_players;

SELECT * FROM ipl_players WHERE team = 'Mumbai Indians';

SELECT name, nickname, auction_price_crores FROM ipl_players WHERE auction_price_crores > 10.0;

SELECT * FROM ipl_players WHERE role = 'All-Rounder' AND wickets_taken > 10;

SELECT * FROM ipl_players WHERE team = 'CSK' OR team = 'RCB';

SELECT * FROM ipl_players WHERE name LIKE 'R%';

SELECT * FROM ipl_players WHERE auction_price_crores BETWEEN 5 AND 12;

SELECT * FROM ipl_players WHERE team != 'Mumbai Indians';

SELECT * FROM ipl_players WHERE team <> 'Mumbai Indians';

SELECT * FROM ipl_players WHERE team IS NULL;

SELECT * FROM ipl_players WHERE team IS NOT NULL;

SELECT * FROM ipl_players WHERE role = 'Batsman' AND (team = 'RCB' OR team = 'CSK');

SELECT * FROM ipl_players WHERE name LIKE '_a%';

SELECT * FROM ipl_players WHERE name LIKE '__r%';

SELECT * FROM ipl_players WHERE name ILIKE '__R%';

SELECT * FROM ipl_players WHERE name NOT LIKE 'R%';

SELECT * FROM ipl_players WHERE team NOT IN ('Mumbai Indians', 'CSK', 'RCB');

SELECT * FROM ipl_players WHERE auction_price_crores NOT BETWEEN 10 AND 15;

SELECT name, nickname, runs_scored FROM ipl_players ORDER BY runs_scored DESC;

SELECT name, nickname, auction_price_crores FROM ipl_players ORDER BY auction_price_crores ASC;

SELECT team, name, auction_price_crores FROM ipl_players ORDER BY team ASC, auction_price_crores DESC;

SELECT name, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 3;

SELECT name, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 3 OFFSET 3;

SELECT name, nickname, auction_price_crores, (auction_price_crores * 100) AS price_in_lakhs FROM ipl_players;

SELECT name, nickname, auction_price_crores, auction_price_crores + 2 AS new_price FROM ipl_players;

SELECT name, nickname, (runs_scored + (wickets_taken * 25)) AS total_impact FROM ipl_players ORDER BY total_impact DESC;

SELECT DISTINCT role FROM ipl_players;
