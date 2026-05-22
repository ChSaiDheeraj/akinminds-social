# 🧠 AkinMinds

> A modern full-stack MERN social media platform inspired by X/Twitter with real-time social interactions, image uploads, profile management, and responsive UI.

---

# 📚 Table of Contents

1. [Overview](#1-overview)
2. [Key Features](#2-key-features)
3. [System Architecture](#3-system-architecture)
4. [Tech Stack](#4-tech-stack)
5. [Folder Structure](#5-folder-structure)
6. [Frontend Features](#6-frontend-features)
7. [Backend Features](#7-backend-features)
8. [Authentication Flow](#8-authentication-flow)
9. [Cloudinary Integration](#9-cloudinary-integration)
10. [How to Run](#10-how-to-run)
11. [Screenshots](#11-screenshots)
12. [Production Fixes Before Deployment](#12-production-fixes-before-deployment)
13. [Deployment Guide](#13-deployment-guide)
14. [Future Improvements](#14-future-improvements)
15. [Contributors](#15-contributors)
16. [Conclusion](#16-conclusion)

---

# 1. Overview

AkinMinds is a modern full-stack MERN social media platform built for developers, creators, and communities to connect, share updates, and collaborate in real time.

The project focuses on:

* Scalable MERN architecture
* Responsive modern UI
* Secure JWT authentication
* Image uploads using Cloudinary
* Full frontend-backend integration
* Social feed experience inspired by X/Twitter

---

# 🚀 Live Demo

🌐 Frontend: https://akinminds-social-1.onrender.com


---

# 📦 GitHub Repository

🔗 Repository:
https://github.com/ChSaiDheeraj/akinminds-social

---

# 2. Key Features

* 🔐 JWT Authentication System
* 👤 User Registration & Login
* 📝 Create & Delete Posts
* 🖼️ Image Upload Support
* ❤️ Like Posts
* 💬 Comment System
* 👤 User Profile Management
* 🔔 Notifications
* 🌙 Light / Dark Theme (DaisyUI)
* ☁️ Cloudinary Integration
* ⚡ REST API Architecture
* 🎨 Responsive Premium UI
* 📱 Mobile-Friendly Design

---

# 3. System Architecture

```text
Frontend (React + TailwindCSS)
        ↓
React Query + Fetch API
        ↓
Backend (Node.js + Express)
        ↓
MongoDB Atlas Database
        ↓
JWT Authentication + Cloudinary Storage
```

---

# 4. Tech Stack

| Technology       | Purpose              |
| ---------------- | -------------------- |
| React            | Frontend UI          |
| TailwindCSS      | Styling              |
| DaisyUI          | UI Components        |
| Vite             | Frontend Build Tool  |
| React Query      | Data Fetching        |
| React Router DOM | Routing              |
| React Hot Toast  | Notifications UI     |
| Node.js          | Backend Runtime      |
| Express.js       | REST APIs            |
| MongoDB Atlas    | Database             |
| Mongoose         | ODM                  |
| JWT              | Authentication       |
| bcrypt.js        | Password Hashing     |
| Cloudinary       | Image Hosting        |
| Render           | Deployment           |

---

# 5. Folder Structure

```text
twitter-clone/
│
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── notification.controller.js
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   ├── db/
│   │   └── connectMongoDB.js
│   ├── lib/
│   │   └── utils/
│   │       └── generateToken.js
│   ├── middleware/
│   │   └── protectRoute.js
│   ├── models/
│   │   ├── notification.model.js
│   │   ├── post.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── notification.route.js
│   │   ├── post.route.js
│   │   └── user.route.js
│   ├── scripts/
│   │   └── seedUsers.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
│
├── screenshots/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 6. Frontend Features

## 🏠 Home Feed

* Dynamic social feed
* Create posts instantly
* Like and comment interactions
* Responsive post cards
* Premium dark UI design

---

## 🔑 Authentication Pages

* Login system
* Registration system
* JWT authentication
* Persistent sessions via HTTP-only cookies

---

## 👤 Profile Page

* User information
* Profile image support
* Cover image support
* User posts section
* Edit profile functionality

---

## 📝 Create Post System

* Text-based posts
* Image uploads
* Cloudinary integration
* Instant feed updates

---

## 🔔 Notifications

* In-app notification feed
* Like and follow event alerts

---

# 7. Backend Features

## 🔐 Authentication APIs

* Register User
* Login User
* Logout User
* JWT Verification Middleware

---

## 📝 Post APIs

* Create Post
* Delete Post
* Like Post
* Comment on Post
* Fetch All Posts
* Fetch Following Feed

---

## 👤 User APIs

* Get User Profile
* Suggested Users
* Follow / Unfollow Users
* Update User Profile

---

## 🔔 Notification APIs

* Get Notifications
* Delete Notifications

---

## ☁️ Cloudinary Integration

* Upload profile images
* Upload cover images
* Upload post images
* Optimized cloud image delivery

---

# 8. Authentication Flow

```text
User Login / Register
        ↓
JWT Token Generated
        ↓
Token Stored in HTTP-only Cookie
        ↓
Protected API Requests
        ↓
Backend Token Verification (protectRoute middleware)
```

---

# 9. Cloudinary Integration

AkinMinds uses Cloudinary for secure cloud-based image hosting.

### Features

* Profile image uploads
* Cover image uploads
* Post image uploads
* CDN-based image delivery
* Optimized image rendering

---

# 10. How to Run

## Step 1 — Clone Repository

```bash
git clone https://github.com/ChSaiDheeraj/akinminds-social.git
cd akinminds-social
```

---

## Step 2 — Setup Backend

```bash
npm install
```

Create `.env` in the project root:

```env
PORT=5001
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run backend:

```bash
npm run dev
```

---

## Step 3 — Setup Frontend

Open a new terminal:

```bash
npm install --prefix frontend
npm run dev --prefix frontend
```

Frontend runs on:

```text
http://localhost:3000
```

Backend runs on:

```text
http://localhost:5001
```

---

## Step 4 — (Optional) Seed Demo Users

```bash
npm run seed:users
```

Creates 10 demo users. All use password: `password123`

---

# 11. Screenshots

## 🔐 Login Page
 
<img src="https://github.com/ChSaiDheeraj/akinminds-social/blob/main/Screenshots/LoginPage.png" width="300" alt="Emergency Features">

---

## 🏠 Home Feed

![HOME](./screenshots/home.png)

---

## 👤 Profile Page

![PROFILE](./screenshots/profile.png)

---

## 📝 Create Post

![POST](./screenshots/post.png)

---

# 12. Production Fixes Before Deployment

Before deploying, make sure the following changes are applied to your codebase.

---

## 🔗 Fix Frontend API URLs

If your frontend currently uses relative paths like:

```js
fetch(`${import.meta.env.VITE_API_BASE_URL}/api/posts")
```

Change every occurrence to use the environment variable:

```js
fetch(`${import.meta.env.VITE_API_BASE_URL}/api/posts`)
```

Do this for every API call in the frontend.

---

## 🌐 Fix CORS in Backend

Inside `backend/server.js`, configure CORS for production:

```js
app.use(
  cors({
    origin: "https://YOUR_FRONTEND_URL.onrender.com",
    credentials: true,
  })
);
```

Replace `YOUR_FRONTEND_URL` with your actual Render frontend URL after deployment.

---

## 🍪 Fix JWT Cookie Config for Production

In your auth controller where cookies are set:

```js
res.cookie("jwt", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "none",
});
```

This ensures cookies work correctly across domains in production.

---

# 13. Deployment Guide

## Platform Overview

| Platform | Service       |
| -------- | ------------- |
| Frontend | Render (Static Site) |
| Backend  | Render (Web Service) |
| Database | MongoDB Atlas |
| Storage  | Cloudinary    |

---

# 13. Deployment Guide

## Step 1 — Deploy Backend First

Go to [Render Dashboard](https://dashboard.render.com) and click:

```text
New + → Web Service
```

Select the `akinminds-social` repository.

### Backend Settings

| Setting        | Value           |
| -------------- | --------------- |
| Name           | `akinminds-api` |
| Root Directory | `backend`       |
| Runtime        | Node            |
| Build Command  | `npm install`   |
| Start Command  | `node server.js` |

### Backend Environment Variables

Add the following in the Render dashboard:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODE_ENV=production
CLOUDINARY_CLOUD_NAME=dvbx0vdvy
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Click **Create Web Service** and wait for deployment.

After it deploys, you will get a URL like:

```text
https://akinminds-api.onrender.com
```

Copy this URL — you need it for the frontend.

---

## Step 2 — Deploy Frontend

Click:

```text
New + → Static Site
```

Select the same `akinminds-social` repository.

### Frontend Settings

| Setting           | Value                    |
| ----------------- | ------------------------ |
| Root Directory    | `frontend`               |
| Build Command     | `npm install && npm run build` |
| Publish Directory | `dist`                   |

### Frontend Environment Variable

```env
VITE_API_BASE_URL=https://akinminds-api.onrender.com
```

Use your actual backend URL from Step 1.

Click **Create Static Site** and wait for deployment.

---

## Step 3 — Update CORS After Frontend Deploys

Once your frontend URL is live (e.g. `https://akinminds.onrender.com`), go back to your backend `server.js` and update:

```js
origin: "https://akinminds.onrender.com"
```

Push the change and redeploy the backend.

---

## Step 4 — Add Repository Description on GitHub

On the right side of your GitHub repo page, click the **⚙️ gear icon** next to "About" and fill in:

**Description:**

```text
Modern MERN social media platform inspired by X/Twitter with JWT auth, Cloudinary uploads, and responsive UI.
```

**Topics:**

```text
mern react mongodb express nodejs social-media tailwindcss cloudinary jwt-authentication fullstack
```

**Website:** Add your frontend URL after deployment.

---

# 14. Future Improvements

* [ ] Real-Time Messaging (WebSockets)
* [ ] Real-Time Notifications
* [ ] Search Users
* [ ] AI Post Recommendations
* [ ] Video Upload Support
* [ ] Admin Dashboard
* [ ] Mobile Application
* [ ] SEO Metadata & Social Previews

---

# 15. Contributors

| Name               | GitHub                                          |
| ------------------ | ----------------------------------------------- |
| Sai Dheeraj Chakka | [ChSaiDheeraj](https://github.com/ChSaiDheeraj) |

---

# 16. Conclusion

AkinMinds demonstrates a complete full-stack MERN social media solution combining:

* Modern Frontend Development
* REST API Architecture
* Authentication & Security
* Cloud Media Storage
* Responsive UI Design
* Real-Time Social Experience

The project showcases practical industry-level MERN stack development concepts and scalable application architecture.

---

> ⭐ If you found this project useful, consider starring the repository on GitHub!
