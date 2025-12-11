FROM node:20-alpine AS deps
WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./frontend/
WORKDIR /app/frontend
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /app
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
COPY --from=builder /app /app
EXPOSE ${PORT}
CMD ["sh", "-c", "npm run start -- -p ${PORT}"]
