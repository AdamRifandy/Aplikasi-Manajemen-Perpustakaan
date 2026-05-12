import { Router } from "express";
import allBook from "./routeBook/allBook.js";

const route = Router();
route.get("/book/all", allBook);

export default route;
