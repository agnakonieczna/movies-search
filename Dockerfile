FROM node:22-alpine AS builder
# Set working directory
WORKDIR /app
# Copy package.json and yarn.lock first (for dependencies caching)
COPY package.json yarn.lock ./
# Install dependencies
RUN yarn install --frozen-lockfile
# Copy the rest of the app's source code
COPY . .
# Build the app (assumes build output goes to /app/dist)
RUN yarn build


# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
# Copy build output from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy custom Nginx config to support SPA
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port (default, better for visibility)
EXPOSE 80