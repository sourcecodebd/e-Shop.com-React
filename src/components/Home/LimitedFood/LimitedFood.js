import { Button } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './LimitedFood.css';

const LimitedFood = ({ limited }) => {
    const { id, title, description, filename, type, price, rating } = limited;

    const { carts } = useAuth(); // using contextAPI
    const { cart, setCount } = carts;
    console.log(cart)

    // const { cart, count, setCart, setCount } = useCart(); //using custom-hook
    const history = useHistory();

    const handleSingleDetails = (id) => {
        history.push(`/single-food-details/${id}`);
        setCount(0);
    }
    const handleReadMore = (id) => {
        history.push(`/read-more/${id}`);
    }

    const priceWithDiscount = parseFloat(price) + parseFloat(price) * 0.60;

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0.2, 0.2, 0.2, 0.2), rgba(0.8, 0.8, 0.8, 0.8)), url(${filename})`,
        backgroundPostion: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
    }

    return (
        <div className="limited">
            {/* <div className="card-img">
                <img src={filename} height={height} width={width} alt="" />
            </div> */}
            <div className="card-purchase">
                <div className="card-purchase-body">
                    <div className="view-image">
                        <i className="fas fa-eye fa-2x"></i>
                        <div className="image-result">
                            <img src={filename} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card-purchase-body">
                    <i onClick={() => handleSingleDetails(id)} className="fas fa-info-circle fa-2x"></i>
                </div>
            </div>
            <div className="card-fig" style={backgroundStyle}>

                <div className="type">{type}</div>
                <span className="badge bg-primary">{id}</span><span className="title">{title}</span>
                <h2 className="yellow">${price} <del className="text-light fs-5">${priceWithDiscount.toFixed(2)}</del></h2>
                <Rating
                    placeholderRating={rating}
                    placeholderSymbol="yellow fa fa-star"
                    emptySymbol="yellow fa fa-star-o"
                    fullSymbol="yellow fa fa-star"
                    fractions={2}
                    readonly
                />
                <p>{description.length > 80 ? description.slice(0, 80) + '...' : description}</p>
                <div className="btn-more">
                    <Button onClick={() => handleReadMore(id)} variant="contained" className="bg-warning">Read More</Button>
                    <Button onClick={() => handleSingleDetails(id)} variant="contained" className="bg-primary ms-2">Add Item</Button>
                </div>
            </div>
        </div>
    );
};

export default LimitedFood;