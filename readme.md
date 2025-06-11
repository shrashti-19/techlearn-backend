# Techlearn Backend Internship - Week 1 🚀

Welcome to the backend project for TechLearn Solutions Internship!  
This is the **Day 1 setup** with Node.js, Express, and MongoDB.

---

## 📁 Folder Structure

- controllers
- middleware
- models
- utils
- .env
- server.js


---

## 🔧 Tech Stack

- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **DotENV** (Environment variables)
- **CORS**, **bcryptjs**, **jsonwebtoken** (For future use)

---

## 📦 Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd techlearn-backend
   ```

2. Install Dependencies
    ```bash
    npm install
    ```

3. Create a .env file
   ```bash
   PORT=5000
   MONGO_URI=<your-mongo-db-uri>
   ```

4. Run the server
   ```bash
   npm run dev
   ```

## API Test
Route: GET /ping
Response:

json:{
    "message": "Pong! Server is running."
}

## Use Postman or ThunderClient to test the endpoint at:
 ```bash
 http://localhost:5000/ping
 ```

##  Features Completed on Day 1
- Express server setup

- MongoDB connection via Mongoose

- .env configuration

- Ping test route for API validation

- Nodemon for dev environment


✅ User Registration
Method: POST

Route: /api/auth/signup

Body (JSON):
```json
{
  "name": "Shrashti",
  "email": "shrashti@example.com",
  "mobile": "9876543210",
  "gender": "female",
  "password": "yourPassword"
}

✅ User Login
Method: POST

Route: /api/auth/login

Body (JSON):
{
  "email": "shrashti@example.com",
  "password": "yourPassword"
}

Response:
{
  "message": "Login successful",
  "user": {
    "id": "...",
    "name": "Shrashti",
    "email": "shrashti@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}

Day 2
- User model created (name, email, mobile, gender, password, github)

- Password hashing with bcrypt

- Registration & Login APIs

- JWT Token generation on login

- Basic auth middleware (for protected routes)


New Features – Day 3
Course and Note Models
Added Course model with title and description

Added Note model with title, content, and a reference to the related course

API Endpoints
Get all courses
GET /api/courses
Returns a list of all available courses.

Get notes for a specific course
GET /api/courses/:id/notes
Returns all notes related to the course with the given id.

🧪 API Testing
You can test the new endpoints with Postman or ThunderClient:

Get all courses:
 ```bash
 GET http://localhost:5000/api/courses
'''

Get notes by course id:
```bash

GET http://localhost:5000/api/courses/<course_id>/notes
```

## Features Completed So Far
- Express server setup

- MongoDB connection via Mongoose

- Environment variables configured

- User authentication with JWT

- Course and Note models with APIs

- Sample data insertion for courses and notes

- API testing instructions

## Progress Tracking (Day 4)
1. POST /api/progress
📋 Update user progress
🔁 Body Example:
json 
{
  "user": "userId_here",
  "course": "courseId_here",
  "completedChapters": ["Variables", "Functions"]
}
- GET /api/progress/:userId
📋 Fetch progress for a user
🔁 Returns list of courses and completed chapters.

✅ Features Completed So Far
✅ Express server setup

✅ MongoDB connection

✅ JWT authentication

✅ Course & Note APIs

✅ User progress tracking (Day 4)

✅ API testing with Postman

✅ Organized folder structure


## Day 5 – Admin & Middleware
- isAdmin field added in User model

# Middleware:

-authMiddleware for token validation

- adminMiddleware to restrict course/note creation to admins

- Protected routes using these middlewares

## Day 6
- Refactoring & Testing
All code split into:

- routes → controllers → models

- All endpoints tested on Postman

- .env variables standardized

- Created a simple index.html to test API from frontend