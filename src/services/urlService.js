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
    const urlDatas = await url.findOneAndUpdate({ shortUrl }, { $inc: { accessCount: 1 } }, { returnDocument: "after" })
    if (!urlDatas) {
        throw new Error("URL inválida");
    }
    return urlDatas.originalUrl;
}