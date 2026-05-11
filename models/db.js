import { DatabaseSync } from "node:sqlite";

const conn = new DatabaseSync("data_perpustakaan.db");
try {
  conn.exec(``);
} catch (err) {
  console.error(err);
}

export default conn;