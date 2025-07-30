# Dockerfile

FROM node:18-alpine

# Buat direktori kerja
WORKDIR /app

# Salin file project
COPY . .

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
RUN pnpm install

# Build Next.js app
RUN pnpm build

# Ekspos port
EXPOSE 3000

# Jalankan aplikasi
CMD ["pnpm", "start"]
