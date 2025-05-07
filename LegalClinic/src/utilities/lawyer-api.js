import sendRequest from "./sendRequest";
const url = "/lawyers/";  

export async function getAllLawyers() {
    return sendRequest(url);
}

export async function getLawyerById (id) {
    return sendRequest(`${url}${id}`)
}