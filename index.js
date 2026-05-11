import express from "express";
import cors from "cors";
import morgan from "morgan";
import route from "./controllers/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use("/perpustakaan", route);

app.listen(process.env.PORT, () => {
  console.log(`Running application on port: ${process.env.PORT}.`);
});