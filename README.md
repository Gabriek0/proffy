# Proffy 📖

### 🚧 This project is under development... 🚧

## How to run this project

Run frontend: `npx nx run frontend:serve`

Run backend: `npx nx run backend:serve`

## Setup a database

Env setup your .env file with local database connection:

```
 DATABASE_URL="mysql://root:docker@localhost:3306/proffy?schema=public"
```

Generate prisma types with: `npx prisma generate`

Prisma studio: `npx prisma studio`

Generate migration: `npx prisma migrate dev`
