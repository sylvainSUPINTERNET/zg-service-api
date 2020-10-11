#FROM node:10
FROM node:12.2.0-alpine

# Create app directory
WORKDIR /usr/src/api-map

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./



RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


# Bundle app source
COPY . .

EXPOSE 4999


CMD [ "npm", "run", "dev"]
