# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:20-alpine

# Install dependencies untuk health check dan security monitoring
RUN apk add --no-cache curl procps

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy build output from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Set environment variable for port
ENV PORT=8547
ENV HOST=0.0.0.0

# Expose port 8547
EXPOSE 8547

# Health check configuration
# Memeriksa HTTP response, memory usage, dan process health
# Interval: check setiap 30 detik
# Timeout: 10 detik untuk response
# Start period: 60 detik untuk initial startup
# Retries: 3 kali sebelum mark sebagai unhealthy
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:8547/api/health || exit 1

# Start the server
CMD ["pnpm", "start"]