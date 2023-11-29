# Truffle

## Description

Simple social media app for creating, sharing and rating recipes with your friends!

## Installation

1. Clone git repository
2. Copy .env.sample and rename to => .env in client, server and flyway
3. Run "docker compose up --build"
4. Read QR code with Expo Go to test app
or
4. Change "npm start" in client/dockerfile to "npm run web" to test via browser
5. Make sure not to commit this change

### Server

1. Navigate to /server and copy .env.sample file and rename as .env
2. Run server and database with "docker compose up" in root directory

### Client

1. Navigate to /client and install client components with "bun install"
2. copy .env.sample file and rename as .env
3. Run client with "bun start"

### Database

1. Navigate to /flyway and copy .env.sample file and rename as .env

## Git

### Rebasing

    git branch -u origin/main

    git rebase origin/main

    git push --force-with-lease origin <branch>
