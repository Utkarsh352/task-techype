<<<<<<< HEAD
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
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> 7c364e9 (Initial commit)
