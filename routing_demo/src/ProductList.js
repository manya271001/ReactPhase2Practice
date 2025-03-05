import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
    const products = [
        { id: 101, name: 'Smartphone' },
        { id: 102, name: 'Laptop' },
        { id: 103, name: 'Headphones' },
        { id: 104, name: 'Smartwatch' }
    ];

    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.name}/${product.id}`}>
                            {product.name} (ID: {product.id})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
