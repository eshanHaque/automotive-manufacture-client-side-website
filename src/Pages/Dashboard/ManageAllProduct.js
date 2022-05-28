import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import ManageAllProductRow from './ManageAllProductRow';

const ManageAllProduct = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://infinite-ridge-15899.herokuapp.com/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>asdhqgbdiqg {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock Quantity</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index)=><ManageAllProductRow
                            key={product._id}
                            product={product}
                            index={index}
                            refetch={refetch}
                            ></ManageAllProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProduct;