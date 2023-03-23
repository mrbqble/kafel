import axios from "axios";

const link = 'https://elite-stroi.kz/api/admin';

export const login = async (username, password) => {
    const response = await axios.post(`${link}/login`, {username, password});
    if (response.data.token) {
        localStorage.setItem("Token", response.data.token);
        return true;
    } else {
        return false;
    }
}