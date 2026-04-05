FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your site
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]