# 📝 Blog App (Django + React)

A modern full-stack(minimalistic design) **Blog Application** built with **Django (backend)** and **React (frontend)**.
The app allows users to create, read, update, and delete blog posts, as well as manage authentication and comments.

---

## 🚀 Features

* 🔐 **User Authentication** (Register, Login, Logout, JWT-based auth)
* ✍️ **Create, Edit, Delete Blog Posts**
* 📖 **Read Blog Posts with Pagination**
* 💬 **Comment System**
* 👤 **User Profiles** (showing posts by author)
* 🔎 **Search & Filter Posts**
* 🎨 **Responsive UI** built with React + Tailwind CSS
* ⚡ **REST API** built with Django REST Framework

---

## 🛠 Tech Stack

**Frontend:**
* React
* React Router
* Axios

**Backend:**
* Django

**Database:**
* SQLite (for development)

---

## 📂 Project Structure

```
blog-site/
│── backend/            # Django project
│
│── frontend/           # React project
│
│── README.md
│── requirements.txt
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Backend (Django)

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate   # (Linux/Mac)
venv\Scripts\activate      # (Windows)

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start backend server
python manage.py runserver
```

Backend will run on: **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

### 2️⃣ Frontend (React)

```bash
cd ../frontend

# Install dependencies
npm install

# Start frontend
npm start
```

Frontend will run on: **[http://localhost:3000/](http://localhost:3000/)**

---

## 🔑 API Endpoints (Examples)

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| GET    | `/api/posts/`         | List all blog posts     |
| POST   | `/api/posts/`         | Create a new post       |
| GET    | `/api/posts/:id/`     | Get single post details |
| PUT    | `/api/posts/:id/`     | Update a post           |
| DELETE | `/api/posts/:id/`     | Delete a post           |
| POST   | `/api/auth/login/`    | Login user (JWT)        |
| POST   | `/api/auth/register/` | Register new user       |

---

## 🧪 Testing

### Backend

```bash
cd backend
python manage.py test
```

### Frontend

```bash
cd frontend
npm test
```

---

## 📦 Deployment

* **Backend**: Deploy with Gunicorn + Nginx / Heroku / Render
* **Frontend**: Deploy with Netlify / Vercel / Nginx
---

## 📝 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute it as needed.

