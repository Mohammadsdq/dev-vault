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

export async function sendRequest(config) {

    // 1. Validate Request
    const validateResult = validateRequestConfig(config);

    if (!validateResult) {
        throw new Error("Invalid Request Configuration!");
    }

    // 2. Destructure Config
    const { method, url, headers, body } = config;

    try {

        // 3. Create Fetch Options
        const options = {
            method,
            headers
        };

        // 4. Add Body if available
        if (body !== null && body !== undefined) {
            options.body = JSON.stringify(body);
        }

        // 5. Send HTTP Request
        const response = await fetch(url, options);

        // 6. Check Response Status
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // 7. Return Raw Response
        return response;

    } catch (error) {
        console.error(error.message);
        throw error;
    };
};

export async function parseResponse(response) {
    try {
        const { status, statusText, ok, headers } = response
        const data = response.status === 204
            ? null
            : await response.json();
        const responseResult = {
            status,
            statusText,
            ok,
            data,
            headers: Object.fromEntries(headers.entries())
        };
        return responseResult;
    } catch (error) {
        console.error(error.message);
    }
}

export function handleRequestError(error) {
    const { name, message } = error;

    let errorResult;
    if (name === "NETWORK_ERROR") {
        errorResult = {
            message: message,
            type: name
        }
    } else if (name === "HTTP_ERROR") {
        errorResult = {
            message: message,
            type: name
        }
    } else if (name === "PARSING_ERROR") {
        errorResult = {
            message: message,
            type: name
        }
    } else {
        errorResult = {
            message: message,
            type: "UNKNOWN_ERROR"
        }
    };

    return errorResult;
}