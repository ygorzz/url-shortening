import url from "../models/Url.js"
import generateShortUrl from "../helpers/generateShortUrl.js"

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
    const urlData = await url.findOneAndUpdate(
        { shortUrl },
        { $inc: { accessCount: 1 } },
        { returnDocument: "after" }
    ).select("originalUrl -_id") // Seleciona apenas originalUrl, menos o _id que vem junto por padrão

    if (!urlData) {
        throw new Error("URL inválida");
    }

    return urlData.originalUrl;
}

export async function findUrlStats(shortUrl) {
    const urlStats = await url.findOne({shortUrl})

    if(!urlStats) {
        throw new Error("URL inválida")
    }

    return urlStats;
}