# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app files
COPY . .

# Expose port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
