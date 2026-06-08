DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS app_users;

-- 1. USERS TABLE
CREATE TABLE app_users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. POSTS TABLE (One User -> Many Posts)
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES app_users(user_id) ON DELETE CASCADE,
    caption TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

-- 3. LIKES TABLE (Many Users -> Many Posts)
CREATE TABLE likes (
    like_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES app_users(user_id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(post_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, post_id) -- User can like a post only ONCE
);

-- 4. COMMENTS TABLE
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES app_users(user_id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(post_id) ON DELETE CASCADE,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 5. FOLLOWS TABLE (User follows User)
CREATE TABLE follows (
    follower_id INT REFERENCES app_users(user_id) ON DELETE CASCADE,
    following_id INT REFERENCES app_users(user_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (follower_id, following_id) -- Composite Primary Key
);

-- ----------------------------------------------------
-- SEED DATA (Let's make it alive)
-- ----------------------------------------------------

INSERT INTO app_users (username, email) VALUES 
('shubham_codes', 'shubham@chaigram.in'),
('hitesh_ui', 'hitesh@chaigram.in'),
('piyush_travels', 'piyush@chaigram.in');

INSERT INTO posts (user_id, caption) VALUES 
(1, 'Just deployed my first Postgres DB! #coding #sql'),
(2, 'New UI design for the app. Thoughts?'),
(3, 'Goa trip planning... again.');

INSERT INTO likes (user_id, post_id) VALUES 
(2, 1), -- Hitesh sir likes Shubham's post
(3, 1), -- piyush likes Shubham's post
(1, 2); -- Shubham likes Hitesh sir's post

INSERT INTO comments (user_id, post_id, comment_text) VALUES 
(2, 1, 'Great job bro!'),
(1, 3, 'Kab chal rahe hain?');

-- Check the Feed for Shubham (Post + Like Count)
SELECT 
    p.caption, 
    COUNT(l.like_id) AS total_likes 
FROM posts p
LEFT JOIN likes l ON p.post_id = l.post_id
GROUP BY p.post_id, p.caption;
