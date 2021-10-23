import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ result }) => {
    const { title } = result || {};

    return (
        <div className="bg-white col-md-3 mx-auto">
            <Link to='/'><p>{title}</p></Link>
        </div>
    );
};

export default SearchResult;