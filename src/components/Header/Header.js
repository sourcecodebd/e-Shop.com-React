
import React from 'react';
import MarqueeOff from './MarqueeOff';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import SearchResult from '../Home/SearchResult/SearchResult';
import Navigation from './Navigation/Navigation';

const Header = () => {
    const { prod } = useAuth();
    const { products, search, setSearch } = prod;

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const found = products?.filter(product => product.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        if (searchText) {
            setSearch(found);
        }
        else {
            setSearch([]);
        }
    }

    return (
        <>
            <div className="header">
                <div className="marquee p-2 containers" id="short-msg">
                    <div className="d-flex">
                        <marquee width="100%" direction="left">
                            Summer Sale up to 60% OFF selected items
                        </marquee>
                        <i onClick={MarqueeOff} className="fas fa-times mx-4 mt-1"></i>
                    </div>
                </div>
                <hr className="my-0 containers" />
                <div className="info-bar">
                    <div className="header-img-text">
                        <img src="./e-shop.png" width="45px" alt="" />
                        <a href="/"><h3 className="heading fw-bolder">e-Shop.com</h3></a>
                    </div>
                    <div className="search-bar">
                        <input onChange={handleSearch} className="search-input" type="text" placeholder="Search" />
                        <span className="search-logo"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <div className="search-result">
                    {
                        search?.map(sc => <SearchResult result={sc} key={sc.id} />)
                    }
                </div>
            </div >
            <Navigation />
        </>
    );
};

export default Header;