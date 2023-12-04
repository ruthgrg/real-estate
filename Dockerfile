# Specify a base image
FROM node:19-alpine

WORKDIR /app

# Install some dependencies
COPY server /app/

# Default command
RUN npm ci

RUN npx prisma generate

EXPOSE 8000

CMD ["node", "index.js"]


