import { DatabaseSync } from "node:sqlite";

const conn = new DatabaseSync("data_perpustakaan.db");
try {
  
} catch (err) {
  console.error(err);
}

export default conn;