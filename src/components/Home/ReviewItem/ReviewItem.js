import { Button } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert2';

const ReviewItem = ({ item }) => {
    const { id, title, filename, quantity, price } = item || {};
    let totalPrice = price * quantity;

    const { carts } = useAuth();
    const { cart, setCart } = carts;

    const handleRemoveItem = () => {
        const deleted = cart.filter(c => c.id !== item.id);
        setCart(deleted);
        new swal("", "Item removed!", "warning");
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 align-items-center justify-content-center shadow my-3 py-3">
            <img src={filename} width="100%" height="200px" alt="" />
            <h3>{title}</h3>
            <p>Food Id: {id}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <div>
                <Button onClick={handleRemoveItem} variant="contained" className="bg-warning text-dark"><i className="fas fa-trash me-1"></i> Remove</Button>
            </div>
        </div>
    );
};

export default ReviewItem;