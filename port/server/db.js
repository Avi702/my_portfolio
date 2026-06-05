import 'dotenv/config'
import {DatabaseSync} from 'node:sqlite'
import bcrypt from 'bcrypt'

const db = new DatabaseSync('./blog.db')

db.exec(`CREATE TABLE IF NOT EXISTS admin(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL
        )`)

db.exec(`CREATE TABLE IF NOT EXISTS blogs(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
        image TEXT,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        likes INTEGER NOT NULL DEFAULT 0)`)

const adminUsername = process.env.ADMIN
const adminPassword = process.env.ADMIN_PASSWORD

if (adminUsername && adminPassword) {
  const exists = db.prepare('SELECT 1 FROM admin WHERE username = ?').get(adminUsername)
  if (!exists) {
    const hash = bcrypt.hashSync(adminPassword, 10)
    db.prepare('INSERT INTO admin (username, password_hash) VALUES (?, ?)')
      .run(adminUsername, hash)
  }
}

export default db