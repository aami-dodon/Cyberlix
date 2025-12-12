FROM node:20-alpine AS deps
WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./frontend/
COPY frontend/prisma ./frontend/prisma
WORKDIR /app/frontend
RUN apk add --no-cache openssl
RUN npm install
RUN npx prisma generate

FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache openssl
COPY --from=deps /app/frontend/node_modules ./frontend/node_modules
COPY frontend ./frontend
COPY .env ./
WORKDIR /app/frontend
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app/frontend
ARG PORT=3000
ENV NODE_ENV=production
ENV PORT=${PORT}
RUN apk add --no-cache openssl
COPY --from=builder /app /app
EXPOSE ${PORT}
CMD ["sh", "-c", "npm run start -- -p ${PORT}"]
