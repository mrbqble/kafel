import axios from 'axios';

const link = 'https://elite-stroi.kz/api/item';

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
    return response;
}

export const editItem = async (item) => {
    const response = await axios.post(`${link}/editItem`, {item});
    return response;
}

export const deleteItem = async (_id) => {
    const response = await axios.post(`${link}/deleteItem`, {_id});
    return response;
}

export const orderItem = async (_id) => {
    const response = await axios.post(`${link}/orderItem`, {_id});
    return response;
}