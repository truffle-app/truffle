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


INSERT INTO truffle_user (
  email,
  hashed_password,
  username
)
VALUES (
  'truffle@gmail.com',
  'asd',
  'truffler'
);

INSERT INTO recipe (
  title,
  description,
  diet,
  creator,
  incredients,
  methods
)
VALUES (
  'Super upee nakki talo',
  'Oikeesti tosi hieno nakki talo. Sisältää nakkei ja ranskiksii',
  'omnivorous',
  1,
  '{{"nakki, kpl, 5"}, {"peruna, kpl, 10"}}',
  '{"Paista nakki, Keitä peruna, Kasaa talo"}'
);
