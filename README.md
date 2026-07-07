# Student Registration System

A simple full-stack student registration application built using HTML, CSS, JavaScript, n8n, and Supabase.

## Project Overview

This project demonstrates how a frontend communicates with an n8n backend API and stores data in a Supabase database.

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

### Backend
- n8n
- Webhook
- JavaScript Code Node
- Respond to Webhook

### Database
- Supabase (PostgreSQL)

---

## Project Structure

```
student-registration/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Backend Workflow

```
Webhook
    ↓
Code
    ↓
Supabase (Create Row)
    ↓
Respond to Webhook
```

---

## Features

- Register a student
- Send data from frontend to n8n
- Store student details in Supabase
- Return a success response
- Display success or error message

---

## Data Stored

| Field | Type |
|--------|------|
| name | Text |
| course | Text |
| year | Integer |
| registration_date | Timestamp |

---

## API Endpoint

**POST**

```
/webhook/student-registration
```

### Request Body

```json
{
    "name": "John",
    "course": "ML",
    "year": 3
}
```

### Success Response

```json
{
    "success": true,
    "message": "Student registered successfully"
}
```

---

## How to Run

1. Start your n8n workflow.
2. Click **Listen for Test Event** (or activate the workflow for production).
3. Update the webhook URL inside `script.js`.
4. Open `index.html` using VS Code Live Server.
5. Fill the form.
6. Click **Register**.
7. Verify the data is stored in Supabase.

---

## Learning Objectives

This project demonstrates:

- HTML forms
- CSS styling
- JavaScript Fetch API
- HTTP POST requests
- REST API communication
- n8n workflow automation
- Supabase database integration
- Full-stack application architecture

---

## Future Improvements

- Form validation
- View registered students
- Update student details
- Delete student records
- User authentication
- Responsive UI
- Deploy frontend on Netlify or Vercel
- Deploy n8n backend with Docker

---

## Author

**Raaga**