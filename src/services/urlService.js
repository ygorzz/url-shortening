import url from "../models/Url.js"
import  generateShortUrl from "../helpers/generateShortUrl.js"

export async function createShortUrl (originalUrl) {
    const shortUrl = generateShortUrl()
    const newData = {
        originalUrl,
        shortUrl
    }
    const createdUrl = await url.create(newData);
    return createdUrl;  
}