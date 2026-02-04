# Frontend Developer Intern Assignment

A full-stack web application built as part of the Frontend Developer Intern shortlisting assignment.  
The project demonstrates authentication, protected routes, frontend–backend integration, and clean UI practices.

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Swagger (OpenAPI)

---

## Features

- User Signup & Login
- JWT-based Authentication
- Protected Routes (Dashboard)
- User Profile Menu with Logout
- Task Management (Create, Read, Delete)
- Responsive UI
- API Documentation with Swagger

---

## Project Structure

```
primetrade-assignment/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── config/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── context/
    │   └── api/
```

---

## Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5001/api/v1
```

---

## API Endpoints

### Authentication
- `POST /api/v1/auth/signup` – Register a new user
- `POST /api/v1/auth/login` – Login user

### User
- `GET /api/v1/users/me` – Fetch logged-in user profile

### Tasks
- `GET /api/v1/tasks` – Get all tasks
- `POST /api/v1/tasks` – Create a new task
- `DELETE /api/v1/tasks/:id` – Delete a task

---

## API Documentation

Swagger UI is available at:

```
http://localhost:5001/api-docs
```

This provides interactive API documentation and allows testing protected routes using JWT authentication.

---

## How Would I Scale This for Production?

- Use environment-based configuration for dev/staging/production
- Implement refresh tokens for better auth security
- Add pagination and filtering for tasks
- Apply rate limiting to prevent abuse
- Enable database indexing for faster queries
- Use HTTPS and secure cookies
- Deploy frontend on Vercel
- Deploy backend on AWS / Render
- Add centralized logging and monitoring

---

## Author

**Vilas Oza**  
Frontend Developer Intern Candidate
