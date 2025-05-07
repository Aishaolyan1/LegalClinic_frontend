import sendRequest from "./sendRequest";
const url = "/case/";  

export async function index() {
    return sendRequest(url);
}

export async function show(caseId) {
    return sendRequest(`${url}${caseId}/`);
}

export async function create(formData) {
    return sendRequest(url, "POST", formData);
}

export async function update(caseId, formData) {
    return sendRequest(`${url}${caseId}/`, "PUT", formData);
}

export async function deleteCase(caseId) {
    return sendRequest(`${url}${caseId}/`, "DELETE");
}

export async function assignLawyerToCase(caseId, lawyerId) {
    return sendRequest(`${url}${caseId}/assign-lawyer/${lawyerId}/`, "POST");
}

export async function removeLawyerFromCase(caseId, lawyerId) {
    return sendRequest(`${url}${caseId}/remove-lawyer/${lawyerId}/`, "POST");
}

export async function addDocument(caseId, formData) {
    return sendRequest(`${url}${caseId}/add-document/`, "POST", formData);
}
