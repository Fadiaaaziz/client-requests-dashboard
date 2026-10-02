import Database from 'better-sqlite3';
const db= new Database('Data.db');
db.exec(`
    CREATE TABLE IF NOT EXISTS requests(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'New'
     CHECK (Status IN ('New','In Progress', 'Done')),
     created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
     updated_at TEXT AT NOT NULL DEFAULT CURRENT_TIMESTAMP)
    `);
    db.exec(`CREATE INDEX IF NOT EXISTS idx_requests_status ON requests(status)`);
    export default db;