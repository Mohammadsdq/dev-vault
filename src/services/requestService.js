export function createRequestConfig(reqData) {
    const {
        method = "GET",
        url,
        headers = {},
        body = null
    } = reqData;

    const reqConfiguration = {
        method,
        url,
        headers,
        body
    };

    return reqConfiguration;
};

export function validateRequestConfig(config) {
    // 1. Validate config Object
    if (
        config === null ||
        typeof config !== "object" ||
        Array.isArray(config)
    ) {
        return false;
    }

    // 2. Destructure config
    const { method, url, headers, body } = config

    // 3. Validate URL
    if (typeof url !== "string" || !url.trim()) return false;
    try {
        new URL(url);
    } catch {
        return false;
    }

    // 4. Validate HTTP Method
    const allowedMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
    if (!allowedMethods.includes(method)) return false;

    // 5. Validate Headers
    if (
        headers === null ||
        typeof headers !== "object" ||
        Array.isArray(headers)
    ) {
        return false;
    }

    //----------------------------------

    return true;
}