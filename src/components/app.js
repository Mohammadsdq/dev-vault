import { parseResponse } from "../services/requestService.js";

async function testParseResponse() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/999");

        const result = await parseResponse(response);

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

testParseResponse();