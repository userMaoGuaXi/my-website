# Personal Website

A full-stack TypeScript personal website built with modern technologies.

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Turbopack** - Fast bundler

### Backend
- **Nest.js** - Node.js framework
- **TypeScript** - Type safety
- **TypeORM** - Database ORM
- **PostgreSQL** - Database

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- npm

### Installation
```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### Environment Setup
Configure environment variables:

```bash
# Backend: backend/.env
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

```bash
# Frontend: frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Development
```bash
# Start backend (port 3001)
cd backend
npm run start:dev

# Start frontend (port 3000)
cd frontend
npm run dev
```

## Project Status

- [x] Initial project setup
- [x] Database configuration
- [x] Frontend & backend servers running
- [x] Basic API endpoints
- [ ] Project showcase module
- [ ] Blog system
- [ ] User authentication
- [ ] Deployment setup

## API Endpoints

- `GET /` - Hello World
- `GET /api/health` - Health check

## Development Roadmap

### Phase 1: Core Features
1. **Project Showcase** - Display personal projects with details
2. **Blog System** - Write and manage blog posts
3. **About Page** - Personal introduction and skills

### Phase 2: Advanced Features
4. **User Authentication** - Admin login system
5. **Contact Form** - Contact form with email integration
6. **Admin Dashboard** - Content management interface

### Phase 3: Deployment
7. **Production Build** - Optimize for production
8. **CI/CD Pipeline** - Automated deployment
9. **Domain & Hosting** - Deploy to production server

## Project Structure

```
my-website/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable components
│   │   └── lib/            # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Nest.js backend
│   ├── src/
│   │   ├── modules/        # Feature modules
│   │   ├── entities/       # Database entities
│   │   └── main.ts        # Application entry
│   └── package.json
└── README.md
```

## Available Scripts

### Backend
```bash
npm run start:dev    # Development with hot reload
npm run start        # Production start
npm run build        # Build for production
npm run test         # Run tests
```

### Frontend
```bash
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Built with ❤️ using TypeScript