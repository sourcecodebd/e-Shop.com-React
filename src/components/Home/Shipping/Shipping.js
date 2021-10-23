import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const [message, setMessage] = useState('');
    const { carts } = useAuth();
    const { cart } = carts;

    useEffect(() => {
        if (cart.length === 0) {
            setMessage('Your Order has been Placed Successfully! Now you need to give addtional details for Shipping process.');
        }
        else {
            setMessage('Place Your Order first!');
        }
    }, [cart])

    return (
        <div className="bg-white p-3 shadow container mb-4">
            <h2 className="shipping-title">{message}</h2>
        </div>
    );
};

export default Shipping;