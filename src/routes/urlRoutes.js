import express from "express";
import UrlController from "../controllers/urlController.js";

const routes = express.Router();

routes
    .post("/", UrlController.createShortUrl)
    .get("/redirect/:shortUrl", UrlController.redirectShortUrl)
    .get("/stats/:shortUrl", UrlController.findUrlStats)
    .delete("/:shortUrl", UrlController.deleteShortUrl)

export default routes;  