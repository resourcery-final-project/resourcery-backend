-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL,
    password_hash TEXT NOT NULL
);


CREATE TABLE resources (

    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    latitude DEC(8, 6),
    longitude DEC(9, 6),
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    hours TEXT NOT NULL,
    available BOOLEAN,
    category TEXT NOT NULL
);

INSERT INTO resources (latitude, longitude, type, description, image, hours, available, category)

VALUES
    ('42.069690', '666.666666', 'apple', 'Has Apples', 'www.image.com', '12p - 8p', true, 'Fruit Tree')
