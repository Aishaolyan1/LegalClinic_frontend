import sendRequest from "./sendRequest";
const url = "/users/"

export async function signup(formData) {
    try {
        const response = await sendRequest(`${url}signup/`, "POST", formData)
        localStorage.setItem('token', response.access);
        return response
    } catch(err) {
        localStorage.removeItem('token');
        return null;
    }
}

export async function login(formData) {
    try {
        const response = await sendRequest(`${url}login/`, "POST", formData)
        console.log(response, "checking login response")
        localStorage.setItem('token', response.access);
        return response
    } catch (err) {
        localStorage.removeItem('token');
        return null;
    }
}

export function logout() {
    localStorage.removeItem('token');
}

export async function getUser() {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await sendRequest(`${url}token/refresh/`)
            localStorage.setItem('token', response.access);
            return response
        }
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
}