import url from "../models/Url.js"
import generateShortUrl from "../helpers/generateShortUrl.js"
import urlIsExpired from "../helpers/urlIsExpired.js";

export async function createShortUrl(originalUrl) {
    const shortUrl = generateShortUrl()
    const newData = {
        originalUrl,
        shortUrl
    }
    const createdUrl = await url.create(newData);
    return createdUrl;
}

export async function findOriginalUrl(shortUrl) {
    const urlDatas = await url.findOneAndUpdate(
        { shortUrl },
        { $inc: { accessCount: 1 } },
        { returnDocument: "after" }
    ).select("originalUrl expiresAt createdAt -_id") // Seleciona apenas originalUrl, menos o _id que vem junto por padrão

    if (!urlDatas) {
        throw new Error("URL inválida");
    }

    if(urlIsExpired(urlDatas)){
        throw new Error("Url expirada");
    }

    return urlDatas.originalUrl;
}

export async function findUrlStats(shortUrl) {
    const urlStats = await url.findOne({shortUrl})

    if(!urlStats) {
        throw new Error("URL inválida")
    }

    return urlStats;
}

export async function deleteShortUrl(shortUrl) {
    const deletedUrl = await url.findOneAndDelete({shortUrl});
    
    if(!deletedUrl){
        throw new Error("URL inválida")
    }

    return deletedUrl;
} 