import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('item.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className='grid grid-cols-3 gap-4  justify-items-center'>
                {
                    products.map(product => <Product
                    key = {product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;