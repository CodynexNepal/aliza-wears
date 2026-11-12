# Aliza Wears – Company-Wide Operating Standards (SOP-001) API

Production-ready Node.js + TypeScript + Express 5 + TypeORM + PostgreSQL API implementing SOP-001 with RBAC, DTO validation, and idempotency.

## Architecture

```
src/
  config/        # env, database, app config
  entities/      # TypeORM entities
  repository/    # All TypeORM queries live here
  services/      # Business logic
  controllers/   # HTTP handlers
  routes/        # Express routers
  middleware/    # auth, rbac, idempotency, validation, error handler
  dto/           # class-validator DTOs
  utils/         # helpers
  app.ts         # Express app factory
  server.ts      # bootstrap
```

## Quick Start

```bash
# 1. Start PostgreSQL
 docker compose up -d

# 2. Install deps
 npm install

# 3. Configure env
 cp .env.example .env

# 4. Seed database
 npm run seed

# 5. Run dev server
 npm run dev

# 6. QA gates
 npm run typecheck
 npm run lint
 npm test
 npm run test:integration
```

## API Endpoints

| Method | Path | Description | RBAC |
|--------|------|-------------|------|
| POST | /api/v1/sops | Create SOP | admin, editor |
| GET | /api/v1/sops | List SOPs | all authenticated |
| GET | /api/v1/sops/:id | Get SOP by id | all authenticated |
| PUT | /api/v1/sops/:id | Update SOP | admin, editor |
| DELETE | /api/v1/sops/:id | Delete SOP | admin |
| POST | /api/v1/auth/login | Login | public |

## Idempotency

Send an `Idempotency-Key` header on POST/PUT requests. Replays return the original response.

## RBAC Roles

- `admin` – full access
- `editor` – create/update SOPs
- `viewer` – read-only

## Environment Variables

See `.env.example`.
