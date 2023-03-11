import axios from 'axios';

const link = 'http://localhost:1500/item';

export const getItems = async () => {
    const response = await axios.post(`${link}/allItems`);
    return response.data;
}

export const getItem = async (index) => {
    const response = await axios.post(`${link}/getItem`, {index});
    return response.data;
}

export const addItem = async (item) => {
    const response = await axios.post(`${link}/addItem`, {item});
    console.log(response);
}

export const editItem = async (item) => {
    const response = await axios.post(`${link}/editItem`, {item});
    console.log(response);
}

export const deleteItem = async (_id) => {
    const response = await axios.post(`${link}/deleteItem`, {_id});
    console.log(response);
}