import express from "express";
import UrlController from "../controllers/urlController.js";

const routes = express.Router();

routes
    .post("/", UrlController.createShortUrl)
    .get("/redirect/:shortUrl", UrlController.redirectShortUrl)
    .get("/stats/:shortUrl", UrlController.findShortUrlStats)
    .delete("/:shortUrl", UrlController.deleteShortUrl)
    .put("/renew/:shortUrl", UrlController.renewShortUrl)

export default routes;