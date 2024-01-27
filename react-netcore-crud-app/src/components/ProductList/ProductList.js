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

    const handleEdit = () => {
        fetchProducts(); // Refresh product list after editing
    };

    return (
        <div className="container">
            <h2 className="my-4">Product List</h2>
            <ul className="list-group">
                {products.map(product => (
                    <ProductListItem key={product.id} product={product} onDelete={() => handleDelete(product.id)} onEdit={handleEdit} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
