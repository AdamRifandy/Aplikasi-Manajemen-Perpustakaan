import { Router } from "express";
import allBook from "./routeBook/allBook.js";

const route = Router();
route.get("/all", allBook);

export default route;
