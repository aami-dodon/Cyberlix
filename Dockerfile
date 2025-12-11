FROM node:20-alpine AS deps
WORKDIR /app

COPY frontend/package*.json ./
COPY frontend/package-lock.json ./
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY frontend ./
COPY .env ./
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ARG PORT=3000
ENV NODE_ENV=production
ENV PORT=${PORT}
COPY --from=builder /app ./
EXPOSE ${PORT}
CMD ["sh", "-c", "npm run start -- -p ${PORT}"]
