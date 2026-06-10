# Game Store API

## Description

Final Node.js project.

The system manages:

* Users
* Workers
* Games
* Orders

Additional features:

* JWT Authentication
* JWT Authorization Middleware
* Password Encryption (bcrypt)
* Logging System (Winston)
* SQL Server Database
* Sequelize ORM
* Sequelize Associations
* External API Integration (MMOBomb)

---

## Technologies

* Node.js
* Express.js
* SQL Server
* Sequelize
* JWT
* bcrypt
* Axios
* Winston
* dotenv
* CORS

---

## Project Architecture

Routes
↓
Controllers
↓
Services
↓
DAL
↓
SQL Server Database

---

## Middleware

The project includes custom middleware components:

### Request Validation Middleware

Validates incoming requests and ensures required data is provided before processing.

### JWT Authentication Middleware

Protects secured routes by:

* Reading the Authorization Header
* Extracting the Bearer Token
* Validating the JWT token
* Attaching the decoded payload to the request object
* Allowing access only to authenticated users

---

## Sequelize Associations

The project uses Sequelize associations between entities:

* User hasMany Orders

* Order belongsTo User

* Worker hasMany Orders

* Order belongsTo Worker

* Game hasMany Orders

* Order belongsTo Game

These relationships allow working with connected data using Sequelize ORM and foreign keys.

---
## Database

The database creation script is attached separately.

Run the C# database project:

1. Create Database
2. Create Tables
3. Insert Sample Data

This will generate the SQL Server database required by the API.

## Database Setup

Before running the project, make sure SQL Server is installed and running.

The application uses SQL Server Authentication.

Create a `.env` file and configure:

```env
DB_SERVER=localhost\SQLEXPRESS
DB_NAME=YourDatabaseName
DB_USER=YourSqlUser
DB_PASSWORD=YourPassword
JWT_SECRET=YourSecretKey
PORT=2001
```

If SQL Server Authentication is not enabled:

1. Open SQL Server Management Studio (SSMS)
2. Right click the server and select Properties
3. Open the Security tab
4. Select SQL Server and Windows Authentication mode
5. Restart SQL Server
6. Create a SQL login and grant access to the database

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Run Project

Start the server:

```bash
npm start
```

Server URL:

```txt
http://localhost:2001
```

---
## Test User

A test user is available for checking protected routes with JWT.

Login endpoint:

POST /users/auth/login

Request body:

{
  "userName": "Chen",
  "userPassword": "123456"
}

After login, copy the token and send it in Postman Headers:

Authorization: Bearer YOUR_TOKEN_HERE

Most routes in the project are protected and require a valid JWT token.
Passwords are stored encrypted using bcrypt.
---
## API Modules

### Users

* Register User
* Login User
* Update Password
* Reset Password
* Get Users
* Delete User

### Workers

* Create Worker
* Update Worker
* Delete Worker
* Get Workers

### Games

* Create Game
* Update Game
* Delete Game
* Get Games

### Orders

* Create Order
* Update Order
* Delete Order
* Get Orders

---

## External API

MMOBomb API Integration

Available endpoints:

* /games/gamesInfo/live
* /games/gamesInfo/category
* /games/gamesInfo/news

---

## Author

Chen Vanda
