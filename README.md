# Workly - Human Resource Management System

<div align="center">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45" alt="Nx Logo">
  <h3>Modern HRM Platform Built with Nx Monorepo</h3>
  <p>A comprehensive Human Resource Management system with microfrontend architecture</p>
</div>

## 🏢 Overview

**Workly** is a modern, scalable Human Resource Management (HRM) system designed to streamline HR operations, employee management, and organizational workflows. Built with a microfrontend architecture using Nx monorepo, it provides a seamless experience for HR professionals and employees.

## 🚀 Features

### 🔐 Authentication & Authorization
- **JWT-based authentication** with secure token management
- **Role-based access control** (RBAC) for different user types
- **Multi-factor authentication** support
- **Session management** with automatic token refresh

### 👥 Employee Management
- **Employee profiles** with comprehensive information
- **Organizational hierarchy** management
- **Department and team** structure
- **Employee onboarding** workflows

### 📊 HR Operations
- **Leave management** system
- **Attendance tracking**
- **Performance reviews** and evaluations
- **Payroll integration** capabilities
- **Document management** system

### 🎨 Modern UI/UX
- **Responsive design** for all devices
- **Dark/Light mode** support
- **Accessibility compliant** (WCAG 2.1)
- **Microfrontend architecture** for scalability

## 🏗️ Architecture

### Monorepo Structure
```
workly/
├── apps/
│   ├── frontend/
│   │   ├── authentication/     # Auth microfrontend
│   │   └── portal/            # Main HR portal
│   └── backend/
│       └── authetication/     # Authentication API
├── lib/
│   └── ui-theme/             # Shared UI components
└── tools/                    # Build tools and utilities
```

### Technology Stack

#### Frontend
- **Angular 20** - Modern web framework
- **Nx Monorepo** - Scalable workspace management
- **Module Federation** - Microfrontend architecture
- **Tailwind CSS** - Utility-first CSS framework
- **Zard UI** - Custom component library
- **TypeScript** - Type-safe development

#### Backend
- **NestJS** - Scalable Node.js framework
- **JWT Authentication** - Secure token-based auth
- **Swagger/OpenAPI** - API documentation
- **TypeScript** - Full-stack type safety

#### DevOps & Tools
- **Nx Cloud** - Distributed task execution
- **GitHub Actions** - CI/CD pipeline
- **Playwright** - End-to-end testing
- **Jest** - Unit testing framework

## 🛠️ Development

### Prerequisites
- **Node.js** 20.x or higher
- **npm** 9.x or higher
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd workly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   # Start all frontend applications
   npm run start:frontend

   # Start individual services
   npm run start:auth      # Authentication app
   npm run start:portal    # Main HR portal
   npm run start:backend   # Authentication API
   ```

### Available Scripts

#### Development
```bash
npm run start:frontend    # Start all frontend apps
npm run start:auth        # Start authentication app
npm run start:portal      # Start main portal
npm run start:backend     # Start backend API
```

#### Building
```bash
npm run build:frontend    # Build all frontend apps
npm run build:auth       # Build authentication app
npm run build:portal     # Build main portal
npm run build:backend     # Build backend API
```

#### Testing
```bash
npm run test:frontend     # Run all frontend tests
npm run lint:frontend     # Lint all frontend code
```

### Development URLs
- **Authentication App**: http://localhost:4200
- **Main Portal**: http://localhost:4201
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api/docs

## 🔧 Configuration

### Environment Variables
Create `.env` files in respective app directories:

#### Backend (.env)
```env
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
PORT=3000
NODE_ENV=development
```

#### Frontend (.env)
```env
NX_API_URL=http://localhost:3000/api
NX_APP_ENV=development
```

### Nx Cloud Setup
1. Connect to Nx Cloud: `npx nx connect`
2. Configure distributed builds for faster CI/CD
3. Enable task distribution for optimal performance

## 🧪 Testing

### Unit Tests
```bash
# Run all tests
nx run-many --target=test --all

# Run tests for specific project
nx test authentication
nx test portal
nx test backend-authetication
```

### E2E Tests
```bash
# Run all E2E tests
nx run-many --target=e2e --all

# Run specific E2E tests
nx e2e authentication-e2e
nx e2e portal-e2e
```

### Linting
```bash
# Lint all projects
nx run-many --target=lint --all

# Lint specific project
nx lint authentication
nx lint portal
```

## 📦 Deployment

### Production Build
```bash
# Build all applications
npm run build:frontend
npm run build:backend

# Build specific application
nx build authentication --configuration=production
nx build portal --configuration=production
nx build backend-authetication --configuration=production
```

### Docker Support
```bash
# Build Docker images
docker build -t workly-auth ./apps/frontend/authentication
docker build -t workly-portal ./apps/frontend/portal
docker build -t workly-backend ./apps/backend/authetication
```

## 🔐 Security

### Authentication Flow
1. **User Login** → JWT token generation
2. **Token Storage** → Secure HTTP-only cookies
3. **API Requests** → Bearer token authentication
4. **Token Refresh** → Automatic renewal before expiry

### Security Features
- **HTTPS enforcement** in production
- **CORS configuration** for cross-origin requests
- **Rate limiting** on API endpoints
- **Input validation** and sanitization
- **SQL injection** prevention
- **XSS protection** headers

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User authentication
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/logout` - User logout
- `GET /api/health` - Health check

### API Documentation
Visit http://localhost:3000/api/docs for interactive Swagger documentation.

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Run** tests and linting
5. **Submit** a pull request

### Code Standards
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Conventional Commits** for commit messages

## 📈 Performance

### Optimization Features
- **Lazy loading** for microfrontends
- **Code splitting** for optimal bundle sizes
- **Caching strategies** for API responses
- **CDN integration** for static assets
- **Tree shaking** for unused code elimination

### Monitoring
- **Nx Cloud** for build performance
- **Bundle analysis** for size optimization
- **Performance metrics** tracking
- **Error monitoring** and logging

## 🆘 Troubleshooting

### Common Issues

#### Port Conflicts
```bash
# Kill processes on specific ports
npx kill-port 3000 4200 4201
```

#### Dependency Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Build Issues
```bash
# Clear Nx cache
nx reset

# Rebuild from scratch
nx run-many --target=build --all --skip-nx-cache
```

## 📞 Support

### Documentation
- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.io/docs)
- [NestJS Documentation](https://docs.nestjs.com)

### Community
- [Nx Discord](https://go.nx.dev/community)
- [GitHub Issues](https://github.com/your-org/workly/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/nx)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Nx Team** for the amazing monorepo tooling
- **Angular Team** for the robust framework
- **NestJS Team** for the scalable backend framework
- **Tailwind CSS** for the utility-first CSS framework

---

<div align="center">
  <p>Built with ❤️ using Nx Monorepo</p>
  <p>
    <a href="https://nx.dev">Nx</a> •
    <a href="https://angular.io">Angular</a> •
    <a href="https://nestjs.com">NestJS</a> •
    <a href="https://tailwindcss.com">Tailwind CSS</a>
  </p>
</div>