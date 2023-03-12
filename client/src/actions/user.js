import axios from "axios";

const link1 = 'http://localhost:1500/admin';
const link = 'https://kafel-server.onrender.com/admin';

export const login = async (username, password) => {
    const response = await axios.post(`${link}/login`, {username, password});
    if (response.data.token) {
        localStorage.setItem("Token", response.data.token);
        return true;
    } else {
        return false;
    }
}