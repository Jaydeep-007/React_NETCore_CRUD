// src/components/ProductForm/ProductForm.js
import React, { useState } from 'react';
import productService from '../../services/productService';

const ProductForm = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newProduct = { name, price: parseFloat(price) };
        try {
            await productService.addProduct(newProduct);
            onProductAdded(); // Trigger refresh
            setName('');
            setPrice('');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
