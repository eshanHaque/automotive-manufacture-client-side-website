import React from 'react';
import { toast } from 'react-toastify';

const ManageAllProductRow = ({ product, index, refetch }) => {
    const { name, price, qty, img } = product;
    const handleDelete = name => {
        fetch(`https://infinite-ridge-15899.herokuapp.com/product/${name}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`${name} is deleted`)
                refetch();
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="Product image" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{qty}</td>
            <td><button onClick={()=>handleDelete(name)} className='btn btn-xs btn-error'>Delete Product</button></td>

        </tr>
    );
};

export default ManageAllProductRow;