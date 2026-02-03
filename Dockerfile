# ================================
# Build stage
# ================================
FROM docker.io/oven/bun:1-debian AS builder
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# ================================
# Production stage (static files only)
# ================================
FROM docker.io/library/nginx:alpine AS production

COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
