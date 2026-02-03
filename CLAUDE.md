# Le Squat - Builders Collective Website

## Project Overview
Website for Le Squat, a collective of engineers/builders who love solving problems and creating things together.

## Tech Stack
- **Runtime**: Bun
- **Frontend**: Next.js 16 + TypeScript + Tailwind CSS v4
- **Linting/Formatting**: Biome
- **Hosting**: AWS S3 + CloudFront (static export)
- **IaC**: Terraform
- **CI/CD**: GitHub Actions
- **Containers**: Podman (not Docker - use `podman` instead of `docker`)

## Commands

### Development
```bash
# Start dev server
podman compose up

# Or manually
podman run --rm -v $(pwd):/app:Z -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun run dev"
```

### Build
```bash
# Build static export (needs ~4GB memory)
podman run --rm --memory=4g -v $(pwd):/app -w /app docker.io/node:20-slim sh -c "npm install && npm run build"

# Or with Bun (debian image required for Turbopack)
podman run --rm --memory=4g -v $(pwd):/app -w /app docker.io/oven/bun:1-debian sh -c "bun install && bun run build"
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

## Project Structure
```
le-squat/
├── src/app/           # Next.js App Router pages
├── public/            # Static assets
├── terraform/         # Infrastructure as Code
│   ├── bootstrap/     # One-time backend setup
│   ├── environments/  # Per-environment configs
│   └── *.tf           # Main Terraform configs
├── .github/workflows/ # CI/CD pipelines
├── biome.json         # Biome config (linting + formatting)
└── docker-compose.yml # Local development (Podman)
```

## GitHub Secrets Required
- `AWS_ACCESS_KEY_ID`: AWS access key for deployments
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for deployments

## Notes
- Use Podman instead of Docker (installed on this machine)
- Turbopack (Next.js 16 default) needs ~4GB memory for builds
- Use `docker.io/` prefix for images with Podman
