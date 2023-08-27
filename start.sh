#!/bin/bash

# Build the React app using Webpack
cd frontend
npm install
npm run build
cd ..

# Build the Docker container
docker build -t my-django-app .

# Run the Docker container and Django development server
docker run -p 8000:8000 my-django-app
