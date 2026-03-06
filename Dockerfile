# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

ARG SITE_URL=https://academiayaelrodriguez.com
ENV SITE_URL=${SITE_URL}

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# Run stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=80

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json package-lock.json* ./
COPY --from=builder /app/node_modules ./node_modules
RUN npm prune --omit=dev

EXPOSE 80

CMD ["node", "./dist/server/entry.mjs"]
