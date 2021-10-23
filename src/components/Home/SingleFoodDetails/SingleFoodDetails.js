import { Button as ButtonMui } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert2';
import './SingleFoodDetails.css';

const SingleFoodDetails = () => {

    const { prod, carts } = useAuth();
    const { products } = prod;
    const { count, setCount, cart, setCart } = carts;

    const { foodId } = useParams();
    const [foodDetails, setFoodDetails] = useState({});

    useEffect(() => {
        const found = products.find(product => product.id === parseFloat(foodId));
        setFoodDetails(found);
        if (count === 0) {
            setCount(1);
        }
    }, [products, foodId, foodDetails, count, setCount]);

    let newPrice = 0;
    for (const item of cart) {
        newPrice = item.price * item.quantity;
    }

    const addItem = () => {
        setCount(count + 1);
    }
    const removeItem = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setCount(count);
        }
    }


    const foundProduct = cart.find(c => c.id === parseFloat(foodId));
    const addToCart = (foodDetails) => {
        const newArray = [...cart];
        if (foundProduct) {
            foundProduct.quantity += count;
        }
        else {
            foodDetails.quantity = 0;
            foodDetails.quantity += count;
            newArray.push(foodDetails);
        }
        setCart(newArray);
        new swal("", "Your Order has been placed successfully!!", "success");
    }


    return (
        <div className="bg-white p-3">
            <h2 className="single-title">{foodDetails?.title}</h2>
            <p className="lines"></p>
            <div className="single-food-container">
                <div className="single-food-details shadow p-5">
                    <h3>Food Id: {foodId}</h3>
                    <h2 className="text-warning">Price: {!newPrice ? '$' + foodDetails?.price : '$' + newPrice.toFixed(2)}</h2>
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button onClick={removeItem} variant="danger">-</Button><div className="single-input d-flex justify-content-center align-items-center fw-bold">{count}</div><Button onClick={addItem} variant="primary">+</Button>
                    </ButtonGroup>
                    <ButtonMui onClick={() => addToCart(foodDetails)} variant="contained"><i className="fas fa-plus-square me-2"></i> Add To Cart</ButtonMui>
                </div>
                <div className="single-food-image">
                    <img src={foodDetails?.filename} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleFoodDetails;