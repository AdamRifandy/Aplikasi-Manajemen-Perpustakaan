import conn from "../../models/db.js";

export default (req, res) => {
  try {
    const sql = conn.prepare("SELECT * FROM buku").all();
    if (!sql) return res.status(500).json({
      message: "Gagal mendapatkan semua data buku!",
      data: sql,
      status: false
    });
    return res.json({
      message: "Berhasil mendapatkan semua data buku.",
      data: sql,
      status: true
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, data: err, status: false });
  }
};
