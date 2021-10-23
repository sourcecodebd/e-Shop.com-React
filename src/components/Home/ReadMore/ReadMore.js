import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ReadMoreDetails from '../ReadMoreDetails/ReadMoreDetails';
import './ReadMore.css';

const ReadMore = () => {
    const { id } = useParams();
    const { prod } = useAuth();
    const { products } = prod;
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const foundProduct = products.find(product => product.id === parseFloat(id));
        console.log(foundProduct?.title.slice(0, 6))
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foundProduct?.title.slice(0, 6)}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [id, products])

    return (
        <div className="mx-3">
            <h2 className="read-more-title">More Related Foods</h2>
            <p className="lines mb-2"></p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-5 my-5">
                {
                    meals === null ?
                        <div className="alert alert-danger mx-auto shadow-sm">
                            <h5>No Related Meals Found!</h5>
                        </div>
                        :
                        meals?.map(meal => <ReadMoreDetails mealDetails={meal} key={meal.idMeal} />)
                }
            </div>
        </div>
    );
};

export default ReadMore;