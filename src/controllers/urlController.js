import * as urlService from "../services/urlService.js"
export default class UrlController{
    static async createShortUrl (req, res) {
        try {
            const originalUrl = req.body.originalUrl;
            const shortUrl = await urlService.createShortUrl(originalUrl);
            res.status(201).json(shortUrl);
        } catch (error) {
            next(error);
        }
    }
}