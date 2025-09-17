// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import medusa from '../medusa';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        medusa.products.list()
            .then(({ products }) => {
                setProducts(products);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;