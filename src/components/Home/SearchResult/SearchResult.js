import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ result }) => {
    const { id, title } = result || {};

    return (
        <div className="bg-white col-md-3 mx-auto">
            <Link to={`/read-more/${id}`}><p>{title}</p></Link>
        </div>
    );
};

export default SearchResult;