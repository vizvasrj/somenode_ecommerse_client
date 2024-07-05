# Use official Node.js 14 as base image
FROM node:16.20.2-buster-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npx browserslist@latest --update-db


# Copy the rest of the client code
COPY . .

# RUN mv .env.example .env

# Build the client for production
RUN npm run build

# Expose port 8080 for the client
EXPOSE 8080

# RUN npm run build:dev
# Start the client
CMD [ "npm", "start" ]
