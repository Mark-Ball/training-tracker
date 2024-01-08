This is a starter kit to quickly set up a project using the following technologies:
- NextJS
- Tailwind
- Prisma

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup

We use Prisma as our ORM.

First add the database connection strings to `.env`. Change 'mydb' to your own database name.
```
POSTGRES_PRISMA_URL="postgresql://postgres@localhost:5432/mydb?schema=public"
POSTGRES_URL_NON_POOLING="postgresql://postgres@localhost:5432/mydb?schema=public"
```

Second install the Prisma client and generate the Prisma Client API
```bash
yarn prisma generate
```

Sync the database with the Prisma schema
```bash
yarn prisma db push
```

Seed initial data
```bash
yarn prisma db seed
```

You can now view the data by connecting your favourite tool (DBeaver, Valentina Studio, PG Admin etc) to the database. Alternatively Prisma provides a UI to explore your database:

```bash
yarn prisma studio
```

Then view the database on `localhost:5555`
