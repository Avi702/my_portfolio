# Avneet Aurora — Portfolio & Blog

A full-stack personal portfolio website built from scratch. Beyond the usual static portfolio, it includes a **fully custom blog with an authenticated admin CMS** — I can log in, write posts, edit them, and delete them through a protected dashboard, while visitors can read posts and like them in real time.

This project was my way of building a real full-stack application end to end: a React + TypeScript frontend, an Express REST API, a SQLite database, JWT-based authentication, and a transactional email integration — all wired together and debugged by hand.

---

## Features

- **Portfolio pages** — Home, About (with an embedded resume PDF), and a Projects page showcasing my work.
- **Contact form** — sends me a real email on submit via the [Resend](https://resend.com) API.
- **Blog** — public visitors can read posts and like them; likes persist to the database.
- **Admin CMS** — a protected, login-gated area to create, edit, and delete blog posts (full CRUD).
- **JWT authentication** — admin login issues a signed token (24h expiry) that gates every write operation on the backend.
- **Responsive, hand-written CSS** — a consistent warm theme with hover states, transitions, and subtle load animations (no UI framework).

---

## Tech Stack

### Frontend
- **React 19** + **TypeScript**
- **Vite 8** for dev server and bundling, with the **React Compiler** enabled via Babel
- **React Router 7** for client-side routing
- **Font Awesome** for icons (like / edit buttons)
- Plain **CSS** (no Tailwind / component library)

### Backend
- **Node.js** + **Express 5** REST API
- **SQLite** via Node's built-in `node:sqlite` module (`DatabaseSync`)
- **bcrypt** for password hashing
- **jsonwebtoken (JWT)** for stateless authentication
- **CORS** + **dotenv** for cross-origin requests and config
- **Resend** for transactional email (contact form)
- **multer** for image upload handling (image-upload feature in progress — see Roadmap)

### Tooling
- **ESLint** with the TypeScript and React Hooks plugins
- **nodemon** for backend hot-reload

---

## How It Works

### Authentication flow
1. On startup, the server seeds a single admin account into the `admin` table from environment variables, storing a **bcrypt hash** of the password (never the plaintext).
2. `POST /api/admin/adminLogin` compares the submitted password against the hash and, on success, returns a **signed JWT** (`expiresIn: 24h`).
3. The frontend stores that token in `localStorage`. A small `useAuth` hook reads it to decide whether to show admin-only UI (Create / Edit / Delete buttons), and listens for `storage` events so login state stays in sync.
4. Every write request sends the token in an `Authorization: Bearer <token>` header. A reusable **`authMiddleware`** verifies the token before the protected route runs — so even if someone hits the API directly, they can't post, edit, or delete without a valid token.

### Blog data flow
- Posts live in a `blogs` table (`id`, `created_at`, `image`, `subject`, `message`, `likes`).
- The frontend fetches all posts, renders them as cards, and formats the Unix timestamp into a readable date.
- The **like button uses an optimistic update**: it bumps the count in the UI immediately, then reconciles with the server's response — and rolls back if the request fails.

---

## API Reference

Base URL: `http://localhost:8000`

| Method | Endpoint | Auth | Description |
|--------|----------|:----:|-------------|
| `POST` | `/api/admin/adminLogin` | — | Log in, returns a JWT |
| `POST` | `/api/contact` | — | Send a contact-form message via email |
| `GET`  | `/api/Blog` | — | List all blog posts (newest first) |
| `GET`  | `/api/admin/AdminEdit/:id` | — | Fetch a single post (used to pre-fill the edit form) |
| `PATCH`| `/api/:id/BlogLikes` | — | Increment a post's like count |
| `POST` | `/api/admin/adminBlogPost` | ✅ | Create a new post |
| `PUT`  | `/api/admin/AdminEdit/:id` | ✅ | Update an existing post |
| `DELETE`| `/api/admin/AdminDelete/:id` | ✅ | Delete a post |

✅ = requires a valid JWT (`Authorization: Bearer <token>`)

---

## Project Structure

```
my_portfolio/
└── port/                      # frontend (Vite + React + TS)
    ├── public/                # static assets (resume PDF, images, backgrounds)
    ├── src/
    │   ├── App.tsx            # Home page
    │   ├── About.tsx          # About + embedded resume
    │   ├── Portfolio.tsx      # Projects page
    │   ├── Contact.tsx        # Contact form
    │   ├── Blog.tsx           # Public blog page
    │   ├── components/        # Navbar, Footer, BlogList, BlogCard
    │   ├── admin/             # AdminLogin, AdminPost, AdminEdit + useAuth hook
    │   └── main.tsx           # routes (React Router)
    └── server/                # backend (Express + SQLite)
        ├── server.js          # app entry, mounts routes
        ├── db.js              # SQLite setup + admin seeding
        ├── middleware.js      # JWT auth middleware
        └── routes/
            ├── authRoutes.js  # admin login
            └── blogRoutes.js  # blog CRUD + contact email
```

---

## Getting Started

The frontend and backend run as two separate processes.

### 1. Backend
```bash
cd port/server
npm install
npm run dev          # starts on http://localhost:8000 (nodemon)
```

Create a `port/server/.env` file with:
```
ADMIN=your_admin_username
ADMIN_PASSWORD=your_admin_password
JWT_SECRET_KEY=some_long_random_secret
RESEND_API_KEY=your_resend_api_key
```
The admin account is seeded automatically from `ADMIN` / `ADMIN_PASSWORD` the first time the server runs.

### 2. Frontend
```bash
cd port
npm install
npm run dev          # starts on http://localhost:5173
```

Open the dev URL, and (for the CMS) log in at `/admin/AdminLogin`.

---

## What I Learned

This project pushed me well past static front-end work and into real full-stack engineering.

- **The blog was the hardest and most rewarding part.** Wiring up all of its endpoints — create, read, update, delete, plus the likes counter — meant designing a consistent REST API, matching each frontend `fetch` to the right method and route, and keeping the database schema in sync with the UI. A lot of my time went into **debugging** the seams between layers: mismatched request bodies, missing auth headers, wrong status codes, and CORS issues. Tracking those down taught me how to read errors across the stack and reason about where a bug actually lives instead of guessing.
- **Authentication from the ground up.** I implemented hashing with bcrypt, signed JWTs, an auth middleware, and token-gated routes — and learned *why* each piece matters (e.g. why you never store plaintext passwords, and why the frontend hiding a button isn't real security without backend enforcement).
- **Designing a clean API.** Splitting routes into modules, using proper HTTP verbs and status codes, and protecting only the routes that mutate data.
- **Frontend/backend integration & UX details.** Handling loading and empty states, formatting timestamps, and building an optimistic like button that updates instantly and gracefully rolls back on failure.
- **Working with real third-party services.** Integrating Resend for transactional email and managing secrets safely with environment variables.

Most importantly, I learned how to take a feature from idea to working software across the whole stack — and how to stay patient and systematic while debugging the parts where the layers meet.

---

## Roadmap

- **Image uploads for blog posts** — the database, `multer`, and a frontend preview are already scaffolded; finishing this is the next step.
- Deploy the frontend (Vercel) and backend, and move the API base URL to an environment variable instead of a hard-coded `localhost`.
- Pagination and tags/categories for posts.
