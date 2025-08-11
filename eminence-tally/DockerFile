# Step 1: Build stage
FROM node:20 AS build

# Working directory
WORKDIR /app


# Package.json aur lock file copy
COPY package*.json ./

# Dependencies install
RUN npm install

# Source code copy
COPY . .

# Build command
RUN npm run build

# Step 2: Production stage (Nginx)
FROM nginx:1.27

# Build output ko Nginx html folder me copy karo
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config copy (optional, agar SPA hai)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port expose
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
