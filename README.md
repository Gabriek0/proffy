# Proffy 📖

### 🚧 This project is under development... 🚧

## How to run this project

#### Setup a database

Env setup your .env file with local database connection:

```
 DATABASE_URL="mysql://root:docker@localhost:3306/proffy?schema=public"
```

Run docker compose: `docker compose up -d`

#### Backend

```bash
# generate prisma types
npx prisma generate

# create the database
npx prisma db push

# seed the database
npx prisma db seed

# run the backend
npm run dev:back
```

Run frontend: `npx nx run frontend:serve`

### Prisma commands

Generate prisma types with: `npx prisma generate`

Prisma studio: `npx prisma studio`

Generate migration: `npx prisma migrate dev`

### Open api generator

OBS: You need java 7+ for run this

Install java on ubuntu: `sudo apt install open-jdk`

Generate open api: `npm run generate:open-api`
