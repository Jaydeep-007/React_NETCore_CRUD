// src/components/ProductList/ProductListItem.js
import React, { useState } from 'react';
import productService from '../../services/productService';

const ProductListItem = ({ product, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(product.name);
    const [editedPrice, setEditedPrice] = useState(product.price);

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        const editedProduct = { ...product, name: editedName, price: parseFloat(editedPrice) };
        try {
            await productService.updateProduct(product.id, editedProduct);
            setIsEditing(false);
            onEdit(); // Refresh product list
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset edited values
        setEditedName(product.name);
        setEditedPrice(product.price);
    };

    return (
        <li className="list-group-item">
            {isEditing ? (
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={editedName} onChange={e => setEditedName(e.target.value)} required />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" value={editedPrice} onChange={e => setEditedPrice(e.target.value)} required />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                    <span>{product.name} - ${product.price}</span>
                    <div>
                        <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default ProductListItem;
