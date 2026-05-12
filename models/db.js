import { DatabaseSync } from "node:sqlite";

const conn = new DatabaseSync("data_perpustakaan.db");
try {
  conn.exec(`
    CREATE TABLE IF NOT EXISTS buku (
      id_buku INTEGER PRIMARY KEY AUTOINCREMENT,
      judul TEXT NOT NULL,
      penulis TEXT NOT NULL,
      status TEXT NOT NULL
    )
  `);
} catch (err) {
  console.error(err);
}

export default conn;
