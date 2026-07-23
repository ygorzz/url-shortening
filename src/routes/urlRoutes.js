import express from "express";
import UrlController from "../controllers/urlController.js";
import * as rateLimit from "../middlewares/rateLimit.js";

const routes = express.Router();

routes
    .post("/shortUrl", rateLimit.creationLimiter, UrlController.createShortUrl)
    .get("/shortUrls", rateLimit.getUrlsLimiter, UrlController.findAllShortUrls)
    .get("/stats/:shortUrl", rateLimit.getStatsLimiter, UrlController.findShortUrlStats)
    .get("/redirect/:shortUrl", rateLimit.redirectLimiter, UrlController.redirectShortUrl)
    .delete("/:shortUrl", rateLimit.deletionLimiter, UrlController.deleteShortUrl)
    .put("/renew/:shortUrl", rateLimit.updateLimiter, UrlController.renewShortUrl)

export default routes;