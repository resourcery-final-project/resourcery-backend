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
    image TEXT,
    hours TEXT NOT NULL,
    available BOOLEAN,
    title TEXT NOT NULL,
    address TEXT,
    phone TEXT
);

INSERT INTO resources (title, address, phone, description, hours, type)

VALUES
    ('All Saints Episcopal Church', '4033 SE Woodstock Blvd. Portland, OR 97202', 'Main Line: 503-777-3829', 'Hot meals.','Hours 11:30 a.m. Sat.', 'Ready To Eat'),
    (
      'Blanchet House of Hospitality', '310 NW Glisan St. Portland, OR 97209', 'Main Line: 503-241-4340', 'Free hot meals. No questions asked.', 'Hours: 6:30-7:30 a.m. (breakfast), 11:30 a.m. -12:30 p.m. (lunch), 5-6 p.m. (dinner) Mon.- Sat.', 'Ready To Eat'
    ),
    (
      'Cityteam Portland',
      '526 SE Grand Ave. Portland, OR 97214',
      'Main Line: 503-231-9334',
      'Dining hall serving men, women and children.',
      'CLOSED',
      'Ready To Eat'
    )