export function parseCookies(cookieHeader?: string) {
    if (!cookieHeader) return {}


    return Object.fromEntries(
        cookieHeader.split('; ').map(chunk => {
            const [key, value] = chunk.split('=')
            return [decodeURIComponent(key), decodeURIComponent(value)]
        })
    )
}