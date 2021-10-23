import React from 'react';
import useAuth from '../../../hooks/useAuth';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css';

const OrderReview = () => {
    const { carts } = useAuth();
    const { cart } = carts;

    return (
        <div className="bg-white p-3">
            <div className="order-review">
                <h2 className="order-title">Order Your Review</h2>
                <p className="lines mb-2"></p>
                <div className="container shadow">
                    {
                        cart?.map(c => <ReviewItem item={c} key={c.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderReview;