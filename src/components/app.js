import {
    createRequestConfig,
    validateRequestConfig,
    sendRequest,
    parseResponse,
    handleRequestError
} from "../services/requestService.js";


const testRequest = async () => {
    try {
        const createRequestConfigResult = createRequestConfig({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users/1",
            headers: {},
            body: null
        })

        if (!validateRequestConfig(createRequestConfigResult)) {
            const error = new Error("Invalid Request Configuration");
            error.name = "HTTP_ERROR";

            throw error;
        }

        const sendRequestResult = await sendRequest(createRequestConfigResult);

        const parseResponseResult = await parseResponse(sendRequestResult);
        console.log(parseResponseResult);
    } catch (error) {
        console.log(handleRequestError(error));
    }

}


testRequest()