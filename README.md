# Error Tracker

This project is a simple web application for tracking error messages encountered during development. It consists of a React frontend, a Node.js/Express backend, and a MongoDB database, all containerized with Docker.

## Prerequisites

Before running this project, make sure you have the following installed:

- Docker
- Docker Compose

## Getting Started

Follow these steps to set up and run the project.

### 1. Clone the Repository
git clone https://github.com/MechkarovTUES/error-buddy.git
cd error-buddy

### 2. Install dependencies
npm i cors

### 3. Run the Application with Docker Compose
From the `error-buddy` root directory, use Docker Compose to build and start the services:

docker-compose up –-build

This command will:
- Build and start the MongoDB database, backend, and frontend services.
- MongoDB will run on `mongodb://mongo:27017`.
- The backend API will be available at `http://localhost:3000`.
- The frontend React app will be available at `http://localhost:3001`.

### 4. Access the Application

Once all containers are up and running, you can access the frontend by navigating to:
http://localhost:3001