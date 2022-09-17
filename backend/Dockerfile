# Get the image from dockerhub
FROM node:16-alpine as build

# Declare the container app main directory
WORKDIR /app

# Copy only dependencies files for faster cache docker build
COPY package*.json .

# Install dependencies
RUN npm install

# Copy all other files - if code changes, build starts from here
COPY . .

# Build the backend image
RUN npm run build

# ---------------------------------------------------
# Get the image from dockerhub
FROM node:16-alpine as production

# Declare the container app main directory
WORKDIR /app

# Copy only dependencies files for faster cache docker build
COPY package*.json .

# Install production only dependencies from package.json
RUN npm install --only=production

# Copy files from build stage to production stage - only js
COPY --from=build /app/dist ./dist

CMD ["node", "dist/index.js"]
