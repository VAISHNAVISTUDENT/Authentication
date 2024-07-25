# Authentication System
This is a basic authentication system with user registration and login functionalities using Node.js, Express, MySQL, and JWT (JSON Web Token). The system includes RESTful endpoints for user registration, login, and profile retrieval, with JWT used to secure the endpoints.

## Features
User Registration: Allows new users to register with a unique username, email, and password.
User Login: Allows registered users to login and receive a JWT for session management.
Profile Retrieval: Allows logged-in users to retrieve their profile information.
Password Hashing: Uses bcryptjs for hashing passwords before storing them in the database.
JWT Security: Secures endpoints using JSON Web Tokens.
## Used
Node.js (v14 or higher)
MySQL
