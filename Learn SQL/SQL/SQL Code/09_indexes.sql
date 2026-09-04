
CREATE TABLE marks (
    id serial primary key,
    name text,
    marks int not null
);

INSERT INTO marks (name, marks)
SELECT
    substr(
        translate(
            md5(random()::text || gs::text),
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ),
        1,
        12
    ) AS name,
    floor(random() * 100 + 1)::int AS marks

FROM generate_series(1, 1000000) AS gs;

SELECT * FROM marks;

explain analyze SELECT marks FROM marks WHERE name = '809E15792322';

DROP INDEX IF EXISTS idx_name;
CREATE INDEX idx_name ON marks (name);
CREATE INDEX idx_name ON marks (name) INCLUDE (marks); -- non-key column for covering index
