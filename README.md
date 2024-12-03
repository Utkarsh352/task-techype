# NestJS Social Auth API

This project implements a user authentication system with social login capabilities using Google and LinkedIn via the NestJS framework. The API allows users to register, log in, and authenticate using their Google or LinkedIn accounts. The backend uses JWT for token-based authentication and PostgreSQL for data storage.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Google Authentication](#google-authentication)
  - [LinkedIn Authentication](#linkedin-authentication)
- [License](#license)

---

## Features

- **JWT Authentication**: Secure authentication using JWT tokens.
- **Google OAuth**: Sign in via Google using OAuth 2.0.
- **LinkedIn OAuth**: Sign in via LinkedIn using OAuth 2.0.
- **User Registration**: Register a user with a username, email, and password.
- **Password Hashing**: Passwords are securely hashed using bcrypt before being stored in the database.

---

## Tech Stack

- **NestJS**: A framework for building efficient and scalable server-side applications.
- **TypeORM**: ORM for interacting with PostgreSQL.
- **PostgreSQL**: Relational database used for storing user data.
- **JWT**: JSON Web Tokens for secure authentication.
- **OAuth2**: Google and LinkedIn OAuth2 implementations for social login.
- **Bcrypt**: Used to securely hash passwords before storing them in the database.

---

## Installation

Follow the steps below to set up and run the application locally:

Set up environment variables

Create a `.env` file in the root of the project directory and fill in the required fields.

```ini
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=user
DATABASE_PASSWORD=password
DATABASE_NAME=login_db
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=1h

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/redirect

LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
LINKEDIN_CALLBACK_URL=http://localhost:3000/auth/linkedin/redirect
```

### 4. Run the application

Once the environment is set up, start the application with the following command:

```bash
npm run start:dev
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

---

## Configuration

### Database Configuration

- **PostgreSQL**: The application uses PostgreSQL as the database.
- Make sure that PostgreSQL is installed and running on your machine.
- The default connection is configured with:
  - **Host**: `localhost`
  - **Port**: `5432`
  - **Username**: `user`
  - **Password**: `password`
  - **Database**: `users`

---

## API Endpoints

### Google Authentication

**Route**: `GET /auth/google`

This endpoint redirects users to Google’s OAuth page for authentication. Once authenticated, the user is redirected back to the application.

- **Success**: User is authenticated and redirected back to the callback URL.
- **Failure**: An error message will be displayed.

### LinkedIn Authentication

**Route**: `GET /auth/linkedin`

This endpoint redirects users to LinkedIn's OAuth page for authentication. Once authenticated, the user is redirected back to the application.

- **Success**: User is authenticated and redirected back to the callback URL.
- **Failure**: An error message will be displayed.

---

## Database Setup

### 1. Create the Database

First, ensure PostgreSQL is installed and running on your machine.

```bash
psql -U postgres
CREATE DATABASE users;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
