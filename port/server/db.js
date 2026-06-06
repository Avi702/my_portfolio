import 'dotenv/config'
import { createClient } from '@libsql/client'
import bcrypt from 'bcrypt'

// in production this points at Turso; locally it falls back to a local SQLite file
const db = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:blog.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
})

// create the tables if they don't already exist
await db.execute(`CREATE TABLE IF NOT EXISTS admin(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL
        )`)

await db.execute(`CREATE TABLE IF NOT EXISTS blogs(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
        image TEXT,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        likes INTEGER NOT NULL DEFAULT 0)`)

// seed the admin account from env vars the first time the server runs
const adminUsername = process.env.ADMIN
const adminPassword = process.env.ADMIN_PASSWORD

if (adminUsername && adminPassword) {
  const existing = await db.execute({
    sql: 'SELECT 1 FROM admin WHERE username = ?',
    args: [adminUsername],
  })
  if (existing.rows.length === 0) {
    const hash = bcrypt.hashSync(adminPassword, 10)
    await db.execute({
      sql: 'INSERT INTO admin (username, password_hash) VALUES (?, ?)',
      args: [adminUsername, hash],
    })
  }
}

export default db
