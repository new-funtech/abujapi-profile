FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate \
  && pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache curl nginx \
  && mkdir -p /run/nginx

ENV NODE_ENV=production
ENV PORT=8547
ENV NEXT_PORT=3000
ENV HOSTNAME=127.0.0.1

COPY nginx.conf /etc/nginx/http.d/default.conf
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
RUN rm -f .env .env.*

EXPOSE 8547

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:8547/api/health || exit 1

CMD ["docker-entrypoint.sh"]
