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
        if (cart.length) {
            setShipping(address);
            e.target.reset();
            new swal("Hurray!", "Your Shipping is on the way", "success");
        }
        else {
            new swal("", "Place Your Order first!", "error");
        }
        e.preventDefault();
    }

    return (
        <div>
            <h2 className="shipping-title">Shipping Information</h2>
            <p className="lines"></p>
            <div className="col-md-8 shadow container mb-4 my-3 d-lg-flex justify-content-center p-3 gap-5" style={backgroundStyle}>
                <div className="bg-blur rounded-3 text-dark p-3 col-md-4 mx-auto mb-2 h-100">
                    <h4 className="fw-bold">Submit Address</h4>
                    <form onSubmit={handleAddress} className="d-flex flex-column gap-3">
                        <input type="text" ref={houseRef} className="form-control bg-transparent border border-white border-3" placeholder="House No." required />
                        <input type="text" ref={roadRef} className="form-control bg-transparent border border-white border-3" placeholder="Road" required />
                        <input type="text" ref={cityRef} className="form-control bg-transparent border border-white border-3" placeholder="City" required />
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
                    <h4 className="fw-bold">{user?.displayName}</h4>
                    {
                        shipping.house ?
                            <div>
                                <span className="fw-bold">Address: </span><span>{shipping.house}, {shipping.road}, {shipping.city}</span>
                            </div>
                            :
                            <div>
                                Make sure you have provided us your shipping address to confirm your order
                            </div>
                    }
                    <p><i className="fas fa-envelope"></i> <span className="fw-bold">Registered Email:</span> {user?.email}</p>
                    <p><i className="fas fa-receipt"></i> <span className="fw-bold">Total Ordered Product:</span> {cart.length}</p>
                    <p><i className="fas fa-pizza-slice"></i> <span className="fw-bold">Product Quantity:</span> {totalQuantity}</p>
                    <p><i className="fas fa-tags"></i> <span className="fw-bold">Your Bill:</span> {totalPrice} taka only</p>
                    <p><i className="fas fa-shopping-bag"></i><span className="fw-bold"> Added Product In your Cart:</span></p>
                    <div className="row bg-blur border-custom mx-0">
                        <p className="col-md-6 col-6"> <span className="fw-bold">Product</span></p>
                        <p className="col-md-6 col-6"> <span className="fw-bold">Price (BDT.)</span></p>
                    </div>
                    {
                        cart.length ?
                            <div className="overflow-custom">
                                {cart?.map(c => <AddedProduct added={c} key={c.id} />)}
                            </div>
                            :
                            "No Product Added to Cart yet!"
                    }
                    <p><i className="fas fa-phone"></i> <span className="fw-bold">Keep in touch, Our Rider will contact with you soon!</span></p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;