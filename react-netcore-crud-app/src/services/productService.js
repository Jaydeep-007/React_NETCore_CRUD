// src/services/productService.js
import axios from 'axios';

const baseURL = 'https://localhost:7202/api/Product';

const productService = {
    getAllProducts: async () => {
        const response = await axios.get(baseURL);
        return response.data;
    },
    addProduct: async (product) => {
        const response = await axios.post(baseURL, product);
        return response.data;
    },
    deleteProduct: async (id) => {
        const response = await axios.delete(`${baseURL}/${id}`);
        return response.data;
    },
    updateProduct: async (id, product) => {
        const response = await axios.put(`${baseURL}/${id}`, product);
        return response.data;
    }
};

export default productService;
