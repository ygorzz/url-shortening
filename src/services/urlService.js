import url from "../models/Url.js"
import generateShortUrl from "../helpers/generateShortUrl.js"
import urlIsExpired from "../helpers/urlIsExpired.js";
import NotFoundError from "../errors/NotFoundError.js";

export async function createShortUrl(originalUrl) {
    const shortUrl = generateShortUrl()
    const newData = {
        originalUrl,
        shortUrl
    }
    const createdUrl = await url.create(newData);
    return createdUrl;
}

export async function findAllShortUrls(){
    const urls = await url.find();

    return urls;
}

export async function findShortUrlStats(shortUrl) {
    const urlStats = await url.findOne({shortUrl})

    if(!urlStats) throw new NotFoundError("URL não encontrada")

    return urlStats;
}

export async function findOriginalUrl(shortUrl) {
    const urlDatas = await url.findOneAndUpdate(
        { shortUrl },
        { $inc: { accessCount: 1 } },
        { returnDocument: "after" }
    ).select("originalUrl expiresAtMs updatedAt -_id") // Selects only these fields, excluding the _id that comes by default

    if (!urlDatas) throw new NotFoundError("URL não encontrada");
    if(urlIsExpired(urlDatas)) throw new Error("Url expirada");

    return urlDatas.originalUrl;
}

export async function deleteShortUrl(shortUrl) {
    const deletedUrl = await url.findOneAndDelete({shortUrl});
    
    if(!deletedUrl) throw new NotFoundError("URL não encontrada");

    return deletedUrl;
} 

export async function renewShortUrl(shortUrl) {
    const updatedUrl = await url.findOneAndUpdate(
        {shortUrl},
        {updatedAt: Date.now()},
        {returnDocument: "after"}
    );

    if(!updatedUrl) throw new NotFoundError("Url não encontrada");

    return updatedUrl;
}