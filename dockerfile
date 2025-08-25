# Base image: Nginx để phục vụ HTML tĩnh
FROM nginx:alpine

# Xóa file default của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy HTML của bạn vào folder của nginx
COPY ./*.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
