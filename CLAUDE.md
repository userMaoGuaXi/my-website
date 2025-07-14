# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a full-stack TypeScript personal website with separated frontend and backend:

- **Frontend**: Next.js 14 with App Router, TypeScript, and Tailwind CSS (port 3000)
- **Backend**: NestJS API with TypeORM and PostgreSQL (port 3001)

### Key Architecture Patterns
- Frontend uses fetch API for backend communication via `/src/lib/api.ts`
- Backend uses NestJS modules pattern with TypeORM entities
- Database connection configured via environment variables
- Projects module demonstrates full CRUD API implementation

## Development Commands

### Frontend (cd frontend)
```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
```

### Backend (cd backend)
```bash
npm run start:dev    # Development with hot reload
npm run start:debug  # Debug mode with hot reload
npm run build        # Production build
npm run start:prod   # Production server
npm run lint         # ESLint with auto-fix
npm run format       # Prettier formatting
npm run test         # Unit tests
npm run test:e2e     # End-to-end tests
npm run test:cov     # Test coverage
```

## Environment Setup

Backend requires `.env` file with:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=mywebsite
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
PORT=3001
NODE_ENV=development
```

Frontend requires `.env.local` file with:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Code Structure

### Frontend
- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `src/lib/api.ts` - API client with TypeScript interfaces

### Backend
- `src/projects/` - Projects module (controller, service, entity, tests)
- `src/app.module.ts` - Main application module with database config
- Database entities use TypeORM decorators
- Controllers follow NestJS REST patterns

## Current Features
- Projects CRUD API with PostgreSQL storage
- Frontend project showcase page
- TypeScript interfaces shared between frontend/backend concepts
- Basic health check endpoint

## Development Notes
- Both frontend and backend use ESLint for code quality
- Backend includes comprehensive testing setup (unit + e2e)
- Database synchronization enabled for development
- Turbopack used for faster frontend development builds