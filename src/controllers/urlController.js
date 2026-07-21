import * as urlService from "../services/urlService.js"
export default class UrlController{
    static async createShortUrl (req, res, next) {
        try {
            const { originalUrl } = req.body;
            const shortUrl = await urlService.createShortUrl(originalUrl);
            res.status(201).json({message: "URL criada com sucesso", shortUrl});
        } catch (error) {
            next(error);
        }
    }

    static async redirectShortUrl(req, res, next){
        try{
            const { shortUrl } = req.params;
            const originalUrl = await urlService.findOriginalUrl(shortUrl)
            res.redirect(301, `${originalUrl}`);
        } catch (error) {
            next(error);
        }
    }

    static async findUrlStats(req, res, next) {
        try {
            const {shortUrl} = req.params;
            const urlStats = await urlService.findUrlStats(shortUrl);
            res.status(200).json(urlStats);
        } catch (error) {
            next(error);
        }
    }

    static async deleteShortUrl(req, res, next) {
        try {
            const {shortUrl} = req.params;
            const deletedUrl = await urlService.deleteShortUrl(shortUrl);
            res.status(200).json({message: "URL removida com sucesso", deletedUrl})
        } catch (error) {
            next(error);
        }
    }
}