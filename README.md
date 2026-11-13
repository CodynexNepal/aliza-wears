# Aliza Wears Monorepo

This repository contains the frontend and backend for Aliza Wears.

## Structure

- `backend/`: Node.js, TypeScript, Express, TypeORM, PostgreSQL API
- `frontend/`: Next.js App Router, Tailwind CSS, React Hook Form, Yup

## Getting Started

### Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

### Backend

- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Port for the backend server (default: 3001)
- `JWT_SECRET`: Secret for JWT signing
- `IDEMPOTENCY_TTL`: Time-to-live for idempotency keys in seconds

### Frontend

- `NEXT_PUBLIC_API_URL`: URL for the backend API (default: http://localhost:3001)

## API Endpoints

- `GET /health`: Health check
- `GET /api/products`: List all products
- `POST /api/products`: Create a new product
- `GET /api/products/:id`: Get a product by ID

## Design System

- Colors: Warm alabaster (#F7F7F5), white (#FFFFFF), deep charcoal ink (#0E0F0C), lime (#C3FF7D / #9FE870)
- Typography: Tabular-nums for metrics
- No gradients, glassmorphism, or neon glow

## QA Verification

Before marking any engineering task complete:
1. Run `tsc --noEmit`
2. Run `eslint`
3. Run unit tests
4. Run integration tests
5. Check API responses, RBAC permissions, and database integrity

If any check fails, spawn a linked correction task assigned to the responsible engineer.