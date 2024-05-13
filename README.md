# Fastify CRUD Application with MongoDB and React

This is a sample CRUD (Create, Read, Update, Delete) application built with Fastify, Prisma, MongoDB, and React. It provides a basic interface for managing customer data.

## Backend

### Installation and Setup

Install dependencies:

```bash
npm install
Start the backend server:

bash
Copiar código
npm run dev
Backend Structure
index.ts: Entry point for the backend server. Configures Fastify, registers routes, and starts the server.

routes.ts: Defines application routes. Imports controllers for handling business logic for each route.

controllers/: Contains controllers handling business logic for each route. They receive requests, call necessary services, and return appropriate responses.

services/: Contains services encapsulating business logic of the application. Responsible for interacting with the database and executing business logic operations.

prisma.ts: Configuration file for Prisma to connect to the MongoDB database.

Frontend
Installation and Setup
Change directory to frontend:

bash
Copiar código
cd frontend
Install dependencies:

bash
Copiar código
npm install
Start the frontend server:

bash
Copiar código
npm start
Frontend Structure
App.tsx: Main component of the frontend application. Displays a list of customers and a form for adding new customers. Also allows deleting existing customers.

services/api.ts: Configures an axios instance to make API calls to the backend.

Models
types/index.ts: Defines TypeScript types used throughout the application, such as user data types and user identifiers.
Technologies Used
Backend: Fastify, Prisma, MongoDB
Frontend: React
HTTP Client: Axios
Notes
This application uses MongoDB as the database.
Prisma is used as the ORM to interact with the MongoDB database.
The frontend uses React as the JavaScript framework.
Axios is used to make AJAX API calls in the frontend.
Fastify is used as the web framework for the backend server.
