import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isorder, setIsOrder] = useState(null);

    useEffect(() =>{
        fetch('https://infinite-ridge-15899.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center'>
                {
                    products.map(product => <Product
                    key = {product._id}
                    product={product}
                    isorder={isorder}
                    setIsOrder={setIsOrder}
                    ></Product>)
                }
            </div>
           
        </div>
    );
};

export default Products;