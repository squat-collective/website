# Le Squat - Builders Collective Website

## Project Overview
Website for Le Squat, a collective of engineers/builders who love solving problems and creating things together.

## Tech Stack
- **Frontend**: Next.js 16 + TypeScript + Tailwind CSS v4
- **Hosting**: AWS S3 + CloudFront (static export)
- **IaC**: Terraform
- **CI/CD**: GitHub Actions

## Commands

### Development
```bash
# Start dev server (via Docker)
docker compose up

# Or build and run
docker compose up --build
```

### Build
```bash
# Build static export
docker run --rm -v $(pwd):/app -w /app node:20-alpine npm run build
```

### Linting
```bash
docker run --rm -v $(pwd):/app -w /app node:20-alpine npm run lint
docker run --rm -v $(pwd):/app -w /app node:20-alpine npm run type-check
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
└── docker-compose.yml # Local development
```

## GitHub Secrets Required
- `AWS_ACCESS_KEY_ID`: AWS access key for deployments
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for deployments
