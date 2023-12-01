CREATE TYPE DIET AS ENUM ('omnivorous', 'vegetarian', 'vegan');

CREATE TABLE truffle_user (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  hashed_password TEXT NOT NULL,
  username TEXT NOT NULL
);

CREATE TABLE recipe (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  diet DIET NOT NULL,
  creator SERIAL REFERENCES truffle_user(id),
  ingredients TEXT[][3],
  steps TEXT[],
  rating DECIMAL,
  image_url TEXT
);

CREATE TABLE bookmark (
  id SERIAL PRIMARY KEY,
  user SERIAL REFERENCES truffle_user(id),
  recipe SERIAL REFERENCES recipe(id)
)

INSERT INTO truffle_user (email, hashed_password, username)
VALUES ('maili', 'asd', 'kayttaja');
