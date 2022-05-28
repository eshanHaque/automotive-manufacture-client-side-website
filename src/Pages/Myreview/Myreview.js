import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewCus from './ReviewCus';
const Myreview = () => {
    const [reviews] = useReview();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center mt-20 mb-20'>
            {
                    reviews.map(review =><ReviewCus
                        key={review._id}
                        review={review}
                    ></ReviewCus>)
                }
        </div>
    );
};

export default Myreview;