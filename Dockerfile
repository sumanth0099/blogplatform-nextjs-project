
FROM node:18-alpine
RUN apk add --no-cache wget

# working directory
WORKDIR /app

# Copying package.json and package-lock.json
COPY package*.json ./

# Installing dependencies
RUN npm install

# Coping the rest of the application files
COPY . .

# Building the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

CMD ["npm", "start"]