# Aliza Wears E-Commerce Platform

## Overview
A premium, mobile-first fashion e-commerce platform built with Node.js, Express, TypeScript, TypeORM, and PostgreSQL.

## Features
- Product Catalogs with Sizes and Colors
- Search and Filters
- Wishlist and Cart
- Coupons and Promotions
- Checkout with Nepal-compatible Payments (eSewa, Khalti, Fonepay, COD)
- Customer Accounts and Orders
- Order Tracking and Returns
- Inventory Management
- Admin Dashboard

## Tech Stack
- **Backend:** Node.js, Express, TypeScript, TypeORM, PostgreSQL
- **Frontend:** Next.js, Tailwind CSS, React Hook Form, Yup
- **Payments:** eSewa, Khalti, Fonepay, Cash on Delivery
- **Security:** OWASP, JWT, RBAC, Idempotency

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables in `.env`
4. Run migrations: `npm run migrate`
5. Start the server: `npm run dev`

### Environment Variables
- `DB_HOST`: PostgreSQL host
- `DB_PORT`: PostgreSQL port
- `DB_USER`: PostgreSQL user
- `DB_PASSWORD`: PostgreSQL password
- `DB_NAME`: PostgreSQL database name
- `JWT_SECRET`: Secret for JWT signing
- `PORT`: Server port

## API Endpoints

### Auth
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a product by ID
- `POST /api/products` - Create a new product (Admin only)

## Testing
- Unit tests: `npm test`
- Integration tests: `npm run test:integration`
- E2E tests: `npm run test:e2e`

## Deployment
- GitHub Actions for CI/CD
- Docker for containerization
- Kubernetes for orchestration

## Security
- OWASP compliance
- JWT authentication
- RBAC authorization
- Idempotency for payment requests
- Rate limiting
- Helmet for security headers

## License
MIT
