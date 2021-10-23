import { Button } from '@mui/material';
import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';
import AddedProduct from './AddedProduct/AddedProduct';
import swal from 'sweetalert2';
import './Shipping.css';

const Shipping = () => {
    const houseRef = useRef('');
    const roadRef = useRef('');
    const cityRef = useRef('');

    const { carts, firebase } = useAuth();
    const { cart, shipping, setShipping } = carts;
    console.log(cart);
    let totalQuantity = 0;
    let totalPrice = 0;
    for (let item of cart) {
        totalQuantity = totalQuantity + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
    }

    const { user } = firebase;
    const backgroundStyle = {
        backgroundImage: `URL(${cart[0]?.filename ? cart[0]?.filename : user?.photoURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '50vh',
    }

    const handleAddress = e => {
        const house = houseRef.current.value;
        const road = roadRef.current.value;
        const city = cityRef.current.value;
        const address = { house, road, city }
        setShipping(address);
        e.target.reset();
        new swal("Hurray!", "Your Shipping is on the way", "success");
        e.preventDefault();
    }

    return (
        <div>
            <h2 className="shipping-title">Shipping Information</h2>
            <p className="lines"></p>
            <div className="col-md-8 shadow container mb-4 my-3 d-lg-flex justify-content-center align-items-center p-3 gap-5" style={backgroundStyle}>
                <div className="bg-blur rounded-3 text-dark p-3 col-md-4 mx-auto mb-2">
                    <h5>Submit Address</h5>
                    <form onSubmit={handleAddress} className="d-flex flex-column gap-3">
                        <input type="text" ref={houseRef} className="form-control bg-transparent border border-white border-3" placeholder="House No." />
                        <input type="text" ref={roadRef} className="form-control bg-transparent border border-white border-3" placeholder="Road" />
                        <input type="text" ref={cityRef} className="form-control bg-transparent border border-white border-3" placeholder="City" />
                        <Button type="submit" variant="contained">Continue</Button>
                    </form>
                </div>

                <div className="bg-blur rounded-3 text-dark p-3 col-md-7 mx-auto">
                    {
                        user.photoURL ?
                            <img src={user.photoURL} className="rounded-pill" alt="" />
                            :
                            <i className="fas fa-user-circle fa-5x"></i>
                    }
                    <h4>{user?.displayName}</h4>
                    {
                        shipping.house ?
                            <div>
                                <h5>Address:</h5>
                                <p>House: {shipping.house}</p>
                                <p>Road: {shipping.road}</p>
                                <p>City: {shipping.city}</p>
                            </div>
                            :
                            <div>
                                Make sure you have provide us your shipping address to confirm your order
                            </div>
                    }
                    <p><i className="fas fa-envelope"></i> Registered Email: {user?.email}</p>
                    <p><i className="fas fa-receipt"></i> Total Ordered Product: {cart.length}</p>
                    <p><i className="fas fa-pizza-slice"></i> Product Quantity: {totalQuantity}</p>
                    <p><i className="fas fa-tags"></i> Your Bill: {totalPrice} taka only</p>
                    <p><i className="fas fa-shopping-bag"></i> Added Product In your Cart:</p>
                    <div className="row bg-blur border-custom">
                        <p className="col-md-6 col-6">Product</p>
                        <p className="col-md-6 col-6">Price (BDT.)</p>
                    </div>
                    {
                        cart.length ?
                            cart?.map(c => <AddedProduct added={c} key={c.id} />)
                            :
                            "No Product Added to Cart yet!"
                    }
                    <p><i class="fas fa-phone"></i> Keep in touch, Our Rider will contact with you soon!</p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;