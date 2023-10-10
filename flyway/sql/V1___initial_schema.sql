CREATE TYPE DIET AS ENUM ('omnivorous', 'vegetarian', 'vegan');

CREATE TABLE truffle_user (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  hashed_password TEXT NOT NULL,
  username TEXT NOT NULL
);

CREATE TABLE recipe (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  diet DIET NOT NULL,
  creator SERIAL REFERENCES truffle_user(id),
  incredients TEXT[][3],
  methods TEXT[]
);
