// src/components/ProductList/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductListItem from './ProductListItem';
import productService from '../../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const productsData = await productService.getAllProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await productService.deleteProduct(id);
            fetchProducts(); // Refresh product list
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <ProductListItem key={product.id} product={product} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
