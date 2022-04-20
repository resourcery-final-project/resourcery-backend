-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users, resources, comments CASCADE;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE resources (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    latitude DEC,
    longitude DEC,
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    hours TEXT,
    title TEXT NOT NULL,
    address TEXT,
    phone VARCHAR
);

