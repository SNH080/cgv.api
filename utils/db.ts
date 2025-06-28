import sqlite3 from "sqlite3";
import { open } from "sqlite";

// DB 연결
export async function getDb() {
  return open({
    filename: "./movies.db",
    driver: sqlite3.Database,
  });
}

// 초기화 함수
export async function initDb() {
  const db = await getDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      releaseDate TEXT,
      posterUrl TEXT,
      plot TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  return db;
}
