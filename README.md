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

