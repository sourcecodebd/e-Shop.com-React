import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ReviewItem from '../ReviewItem/ReviewItem';
import swal from 'sweetalert2';
import './OrderReview.css';

const OrderReview = () => {
    const { carts } = useAuth();
    const { cart, setCart } = carts;

    const history = useHistory();
    const handleCancelOrder = () => {
        const proceed = window.confirm('Are you sure you want to cancel your order?');
        if (proceed) {
            setCart([]);
            new swal("", "Your Food Order has been canceled successfully!!", "success");
            history.push('/shipping');
        }
    }

    return (
        <div className="bg-white p-3">
            <div className="order-review">
                <h2 className="order-title">Order Your Review</h2>
                <p className="lines mb-2"></p>
                {
                    cart.length ?
                        <Button onClick={handleCancelOrder} variant="contained" className="bg-danger mt-3"><i className="fas fa-location-arrow me-1"></i> Cancel Order</Button>
                        :
                        ""
                }
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