import {rateLimit, MINUTE} from "express-rate-limit";

const WINDOW_IN_MINUTE = 1;
const LIMIT_MESSAGE = `Muitas requisiçoes deste IP. Tente novamente após ${WINDOW_IN_MINUTE} minuto` 

export const creationLimiter = rateLimit({
    windowMs: WINDOW_IN_MINUTE * MINUTE,
    max: 20,
    message: LIMIT_MESSAGE
})

export const getUrlsLimiter = rateLimit({
    windowMs: WINDOW_IN_MINUTE * MINUTE,
    max: 100,
    message: LIMIT_MESSAGE
})

export const getStatsLimiter = rateLimit({
    windowMs: WINDOW_IN_MINUTE * MINUTE,
    max: 100,
    message: LIMIT_MESSAGE    
})

export const redirectLimiter = rateLimit({
    windowMs: WINDOW_IN_MINUTE * MINUTE,
    max: 100,
    message: LIMIT_MESSAGE
})

export const deletionLimiter = rateLimit({
    windowMs: WINDOW_IN_MINUTE * MINUTE,
    max: 10,
    message: LIMIT_MESSAGE
})

export const updateLimiter = rateLimit({
    windowMs: WINDOW_IN_MINUTE * MINUTE,
    max: 20,
    message: LIMIT_MESSAGE
})