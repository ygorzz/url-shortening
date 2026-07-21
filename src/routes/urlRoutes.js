import express from "express";
import UrlController from "../controllers/urlController.js";

const routes = express.Router();

routes
    .post("/", UrlController.createShortUrl)
    .get("/:shortUrl", UrlController.redirectUrl)


export default routes;