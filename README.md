# Twitter Clone

A full-stack Twitter-like social feed built with the MERN stack. Users can sign up, post, follow others, like and comment, and get notifications.

## Tech Stack

- **Frontend:** React, Vite, React Router, Tailwind CSS, DaisyUI, React Query, React Hot Toast
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT (HTTP-only cookies)
- **Media:** Cloudinary (image uploads)

## Features

- Sign up / Login / Logout
- Create, edit, delete posts (text + image)
- Like and comment on posts
- Follow / unfollow users
- User profiles and feed
- Notifications
- Light/dark theme (DaisyUI)

## Setup

1. **Clone and install**

   ```bash
   git clone <your-repo-url>
   cd twitter-clone
   npm install
   npm install --prefix frontend
   ```

2. **Environment**

   Copy `.env.example` to `.env` and set your values:

   - `MONGO_URI` — MongoDB connection string
   - `JWT_SECRET` — Secret for signing JWTs (e.g. long random string)
   - `CLOUDINARY_*` — Cloudinary credentials for image uploads ([cloudinary.com](https://cloudinary.com))

3. **Run**

   - **Development (backend + frontend dev server):**  
     Terminal 1: `npm run dev`  
     Terminal 2: `npm run dev --prefix frontend`  
     App: [http://localhost:3000](http://localhost:3000), API: [http://localhost:5001](http://localhost:5001) (or your `PORT`)

   - **Production (single server, serves built frontend):**  
     `npm run build` then `npm start`  
     App: [http://localhost:5001](http://localhost:5001) (or your `PORT`)

4. **Optional — seed users**

   ```bash
   npm run seed:users
   ```

   Creates 10 demo users; all use password `password123`.

## Project Structure

```
twitter-clone/
├── backend/          # Express API, auth, posts, users, notifications
├── frontend/          # React app (Vite)
├── .env.example       # Template for environment variables
└── package.json      # Root scripts (dev, start, build, seed)
```

## License

MIT
