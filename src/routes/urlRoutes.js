import express from "express";
import UrlController from "../controllers/urlController.js";

const routes = express.Router();

routes
    .post("/", UrlController.createShortUrl)
    .get("/redirect/:shortUrl", UrlController.redirectUrl)


export default routes;