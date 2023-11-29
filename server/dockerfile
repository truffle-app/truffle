FROM oven/bun

WORKDIR /app

COPY package*.json bun.lockb ./
COPY . .
RUN bun install

ENV NODE_ENV production

CMD [ "bun", "dev" ]
