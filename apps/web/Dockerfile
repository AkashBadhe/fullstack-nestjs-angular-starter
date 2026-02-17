# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/web ./apps/web
COPY tsconfig.json ./

# Build application
WORKDIR /app/apps/web
RUN npm run build:prod

# Production stage with nginx
FROM nginx:alpine

# Copy built app
COPY --from=builder /app/apps/web/dist/web /usr/share/nginx/html

# Copy nginx configuration
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
