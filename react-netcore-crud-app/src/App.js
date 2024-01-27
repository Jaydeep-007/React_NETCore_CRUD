// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/ProductForm/ProductForm';

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleProductAdded = () => {
        setRefresh(!refresh); // Toggle refresh state to trigger re-render
    };

    return (
        <div>
            <ProductList key={refresh} />
            <ProductForm onProductAdded={handleProductAdded} />
        </div>
    );
}

export default App;
