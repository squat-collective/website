# Le Squat - Builders Collective Website

## Project Overview
Website for Le Squat, a collective of engineers/builders who love solving problems and creating things together.

---

## Tech Stack
| Layer | Technology |
|-------|------------|
| **Runtime** | Bun |
| **Frontend** | Next.js 16 + TypeScript + Tailwind CSS v4 |
| **Linting/Formatting** | Biome |
| **Hosting** | AWS S3 + CloudFront (static export) |
| **IaC** | Terraform |
| **CI/CD** | GitHub Actions |
| **Containers** | Podman (not Docker) |

---

## Development Guidelines

### 🎯 KISS (Keep It Simple, Stupid)
- **No over-engineering**: Only build what's needed now, not what might be needed later
- **Minimal dependencies**: Every dependency is a liability - add only what's essential
- **Simple solutions first**: If a simple solution works, don't make it complex
- **Clear code over clever code**: Readability > cleverness

### 🧪 TDD (Test-Driven Development)
- **Red → Green → Refactor**: Write failing test, make it pass, then refactor
- **Test behavior, not implementation**: Tests should verify what code does, not how
- **One assertion per test** (when practical): Makes failures clear
- **Test file naming**: `*.test.ts` or `*.spec.ts` next to source files
```bash
# Run tests
podman run --rm -v $(pwd):/app -w /app docker.io/oven/bun:1-debian bun test
```

### 📝 Documentation
- **Self-documenting code**: Use clear names, avoid comments that explain "what"
- **Comments for "why"**: Only comment when the reason isn't obvious
- **README at entry points**: Each major directory should have context
- **Update docs with code**: If you change behavior, update related docs
- **API documentation**: Use JSDoc for public functions/components

### 🚀 CI/CD Best Practices
- **Fast feedback**: CI should fail fast - lint before test, test before build
- **Reproducible builds**: Lock dependencies, use specific versions
- **No manual deploys**: Everything through pipeline
- **Feature branches**: Never push directly to main
- **PR reviews required**: At least one approval before merge
- **Automated testing**: No merge without passing tests

### ☁️ Cloud Compatibility
- **12-Factor App principles**:
  - Config in environment variables
  - Stateless processes
  - Disposable containers
- **Infrastructure as Code**: All infra defined in Terraform
- **Secrets management**: Never commit secrets, use env vars or secrets manager
- **Multi-environment support**: dev/staging/prod parity
- **Cost awareness**: Choose appropriate instance sizes, use spot when possible

### 🔒 Security
- **No secrets in code**: Use environment variables
- **Dependency scanning**: Keep dependencies updated
- **HTTPS everywhere**: No exceptions
- **Input validation**: Never trust user input
- **Principle of least privilege**: Minimal IAM permissions

### 🏗️ Code Style
- **Biome handles it**: Don't argue about style, let the tool decide
- **Consistent imports**: Absolute imports with `@/` prefix
- **Component structure**:
  ```
  ComponentName/
  ├── index.tsx        # Main component
  ├── types.ts         # TypeScript types
  ├── utils.ts         # Helper functions
  └── ComponentName.test.tsx
  ```

### 🌿 Git Workflow
- **Conventional commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
- **Small, focused PRs**: One feature/fix per PR
- **Meaningful commit messages**: Explain the "why"
- **Keep history clean**: Squash when appropriate
- **Branch naming**: `feat/short-description`, `fix/issue-123`

---

## Commands

### Development
```bash
# Start dev server
podman compose up

# Or manually
podman run --rm -p 3000:3000 -v $(pwd):/app:Z -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun run dev"
```

### Build
```bash
# Build static export (needs ~4GB memory for Turbopack)
podman run --rm --memory=4g -v $(pwd):/app -w /app docker.io/node:20-slim sh -c "npm install && npm run build"
```

### Linting & Formatting
```bash
# Check (lint + format)
podman run --rm -v $(pwd):/app -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun run check"

# Fix issues
podman run --rm -v $(pwd):/app -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun run check:fix"

# Type check
podman run --rm -v $(pwd):/app -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun run type-check"
```

### Testing
```bash
# Run tests
podman run --rm -v $(pwd):/app -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun test"

# Run tests in watch mode
podman run --rm -v $(pwd):/app -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun test --watch"
```

---

## Infrastructure

### First-time Setup (Bootstrap)
```bash
cd terraform/bootstrap
terraform init
terraform apply
```

### Deploy Infrastructure
```bash
cd terraform
terraform init -backend-config=environments/dev/backend.tfvars
terraform plan -var-file=environments/dev/terraform.tfvars
terraform apply -var-file=environments/dev/terraform.tfvars
```

---

## Project Structure
```
le-squat/
├── src/
│   └── app/               # Next.js App Router
│       ├── layout.tsx     # Root layout
│       ├── page.tsx       # Home page
│       └── globals.css    # Global styles
├── public/                # Static assets
├── terraform/             # Infrastructure as Code
│   ├── bootstrap/         # One-time backend setup
│   ├── environments/      # Per-environment configs
│   │   ├── dev/
│   │   └── prod/
│   └── *.tf              # Main Terraform configs
├── .github/
│   └── workflows/         # CI/CD pipelines
│       ├── ci.yml        # PR checks
│       └── deploy.yml    # Deployment
├── biome.json            # Biome config
├── docker-compose.yml    # Local dev (Podman)
├── Dockerfile            # Production build
├── Dockerfile.dev        # Development
└── CLAUDE.md             # This file
```

---

## GitHub Secrets Required
| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key for deployments |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key for deployments |

---

## Notes
- Use **Podman** instead of Docker (`docker.io/` prefix for images)
- **Turbopack** (Next.js 16 default) needs ~4GB memory for builds
- **Bun** for runtime, **npm** fallback for CI if needed
- Run `bun run check` before committing to catch issues early
