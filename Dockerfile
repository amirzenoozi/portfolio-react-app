# Dockerfile

# Use an existing node alpine image as a base image.
FROM node:18-alpine

# Set the working directory.
WORKDIR /app

# Copy the package.json file.
COPY package.json yarn.lock ./

# Install application dependencies.
RUN yarn install --production

# Install serve node package.
RUN yarn global add serve

# Bundle app source
COPY . .

# Build the application.
RUN yarn build

# Expose the port.
EXPOSE 3000

# Run the application.
CMD ["serve", "-s", "build", "-l", "3000"]

