import * as urlService from "../services/urlService.js"
export default class UrlController{
    static async createShortUrl (req, res, next) {
        try {
            const { originalUrl } = req.body;
            const shortUrl = await urlService.createShortUrl(originalUrl);
            res.status(201).json(shortUrl);
        } catch (error) {
            next(error);
        }
    }

    static async redirectUrl(req, res, next){
        try{
            const { shortUrl } = req.params;
            const originalUrl = await urlService.findOriginalUrl(shortUrl)
            res.redirect(301, `${originalUrl}`);
        } catch (error) {
            next(error);
        }
    }
}