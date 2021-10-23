import React, { useEffect, useState } from 'react';

const ReadMoreDetails = ({ mealDetails }) => {
    const [msg, setMsg] = useState('');
    const { strMeal, strMealThumb, strCategory, strArea, strTags, strYoutube } = mealDetails;
    const handleYT = (yt) => {
        window.location.href = yt;
    }
    useEffect(() => {
        if (!strYoutube) {
            setMsg('YouTube Link Not Found!');
        }
    }, [strYoutube])

    return (
        <div className="shadow mx-auto p-0">
            <img src={strMealThumb} className="rounded img-fluid" alt={strMeal} />
            <div className="p-3">
                <h5>{strMeal}</h5>
                <p><span className="fw-bold">Category:</span> {strCategory}</p>
                <p>{strArea} Food</p>
                {
                    !msg ?
                        <p className="pointer text-info" onClick={() => handleYT(strYoutube)}>{strYoutube}</p>
                        :
                        <p className="text-danger">{msg}</p>
                }
                <small className="fw-bold">Tags: <span class="badge rounded-pill bg-warning text-dark">{strTags}</span></small>
            </div>
        </div>
    );
};

export default ReadMoreDetails;