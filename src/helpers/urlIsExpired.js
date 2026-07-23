export default function urlIsExpired({expiresAtMs, updatedAt}) {
    const updatedAtMs = updatedAt.getTime();

    return Date.now() - updatedAtMs >= expiresAtMs;
}
