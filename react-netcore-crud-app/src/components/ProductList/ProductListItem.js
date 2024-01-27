// src/components/ProductList/ProductListItem.js
import React from 'react';

const ProductListItem = ({ product, onDelete }) => {
    return (
        <li>
            {product.name} - ${product.price}
            <button onClick={() => onDelete(product.id)}>Delete</button>
        </li>
    );
};

export default ProductListItem;
