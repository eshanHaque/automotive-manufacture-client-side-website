import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: products, isLoading } = useQuery('products', () => fetch('https://infinite-ridge-15899.herokuapp.com/products').then(res => res.json()));
    const imgStorageKey = '479baa967ba9e976fa75e8de4ef96d5c';


    const onSubmit = async data => {
        const image = data.Image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        price: data.price,
                        qty: data.qty,
                        minQty: data.minQty,
                        img: img
                    }
                    fetch('https://infinite-ridge-15899.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res=>res.json())
                    .then(inserted => {
                        if(inserted.insertedId){
                            toast.success('You added a product')
                            reset();
                        }
                        else(
                            toast.error('Failed to add a Product')
                        )
                    })
                }
            })

        if (isLoading) {
            return <Loading></Loading>
        }

    };
    return (
        <div >
            <h1 className='text-2xl'>Add a Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name feild */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="name"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span
                            className="label-text-alt text-orange-400">{errors.name.message}</span>}


                    </label>
                </div>

                {/* Price feild */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Add price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Please input a Price'
                            }
                        })}
                    />
                </div>

                {/* Stock qty feild */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Stock Quentity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Add Available pieces"
                        className="input input-bordered w-full max-w-xs"
                        {...register("qty", {
                            required: {
                                value: true,
                                message: 'Stock Qty is required'
                            }
                        })}
                    />
                </div>

                {/* Min qty feild */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Min Quentity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Add min peice order"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minQty", {
                            required: {
                                value: true,
                                message: 'Min Qty is required'
                            }
                        })}
                    />
                </div>


                {/* photo feild */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span
                            className="label-text-alt text-orange-400">{errors.name.message}</span>}


                    </label>
                </div>

                {/* Submit button */}
                <input className='btn w-full max-w-xs' value="ADD" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;