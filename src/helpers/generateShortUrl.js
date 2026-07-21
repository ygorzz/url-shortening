export default function createShortUrl(){
    let shortUrl = ""
    let i = 0;
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    while(i <= 2){
        const randomNumber = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
        shortUrl += letters[randomNumber] + randomNumber;
        i++;  
    }

    return shortUrl;
}
    