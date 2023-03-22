import axios from "axios";

const link = 'http://localhost:1500/admin';

export const login = async (username, password) => {
    const response = await axios.post(`${link}/login`, {username, password});
    if (response.data.token) {
        localStorage.setItem("Token", response.data.token);
        return true;
    } else {
        return false;
    }
}