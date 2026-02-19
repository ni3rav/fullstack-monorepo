# Full-Stack Monorepo Template

A production-ready monorepo template with TypeScript, Express, React, and PostgreSQL.

## Tech Stack

- **Monorepo**: pnpm workspaces
- **Backend**: Express 5.2 + TypeScript + Better Auth + Drizzle ORM
- **Frontend**: React 19 + React Router + TanStack Query + Vite
- **Database**: PostgreSQL + Drizzle Kit
- **Auth**: Better Auth (email/password + Google OAuth)
- **Deployment**: Vercel ready (vercel.json config included)

## Project Structure

```
apps/
├── api/          # Express backend
│   ├── src/
│   │   ├── index.ts       # Server entry
│   │   ├── lib/
│   │   │   ├── env.ts     # Env validation (Zod)
│   │   │   └── auth.ts    # Better Auth config
│   │   └── db/            # Drizzle client + schema
│   ├── drizzle.config.ts
│   └── package.json
└── web/          # React frontend
    ├── src/
    │   ├── main.tsx       # App entry
    │   ├── lib/           # Auth client, query client, theme
    │   └── components/
    ├── vercel.json        # SPA route rewriting
    └── package.json
```

## Setup

### Prerequisites

- Node.js 18+
- pnpm 10+
- Docker (for PostgreSQL)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start PostgreSQL

```bash
docker run --name odoo-postgres \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=odoo_db \
  -p 5432:5432 \
  -d postgres:16
```

### 3. Setup Environment

**Backend** (`apps/api/.env`):

```env
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:5173
DATABASE_URL=postgresql://admin:password@localhost:5432/odoo_db
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Frontend** (`apps/web/.env.local`):

```env
VITE_WEB_BASE_URL=http://localhost:5173
VITE_SERVER_BASE_URL=http://localhost:3000
```

### 4. Initialize Database

```bash
pnpm --filter api db:migrate
```

### 5. Generate Better Auth Schema

```bash
pnpm --filter api auth:generate
```

## Development

Start both backend and frontend:

```bash
# Terminal 1: Backend (auto-restart with nodemon)
pnpm dev:api

# Terminal 2: Frontend
pnpm dev:web
```

- API: http://localhost:3000
- Frontend: http://localhost:5173

## Scripts

### Backend

```bash
pnpm dev:api        # Dev server with nodemon
pnpm build:api      # TypeScript build
pnpm typecheck:api  # Type checking
```

### Frontend

```bash
pnpm dev:web        # Dev server
pnpm build:web      # Production build
pnpm lint:web       # ESLint
```

### Database

```bash
pnpm --filter api db:generate   # Drizzle migrations
pnpm --filter api db:migrate    # Apply migrations
pnpm --filter api db:studio     # Drizzle Studio UI
```
