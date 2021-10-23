import React from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';
import { handleDownArrow, vanishDownArrow } from './NavPlain';

const Navigation = () => {
    const { carts, firebase } = useAuth(); // using contextAPI
    const { user, logOut } = firebase;
    const { cart } = carts;
    console.log(cart)

    // const { cart, count, setCart, setCount } = useCart(); //using custom-hook

    let quantity = 0;
    for (let item of cart) {
        quantity = quantity + item.quantity;
    }


    const activeStyles = {
        backgroundColor: 'red',
        color: 'black'
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" onMouseOut={vanishDownArrow} className="navbar-main">
            <Container>
                <Navbar.Toggle />
                <Navbar.Brand href="#">
                    <Navbar.Collapse className="justify-content-end">
                        {
                            (user.email || user.displayName) ?
                                <div onMouseOver={handleDownArrow} className="dropdown navbar-custom">
                                    {
                                        user.photoURL ?
                                            <img src={user.photoURL} width="35px" className="rounded-pill border border-warning border-3 me-2" alt={user.displayName} />
                                            :
                                            <i className="fas fa-user-circle me-2"></i>
                                    }
                                    {user.displayName}
                                    <i className="fas fa-chevron-down down-arrow"></i>
                                    <div className="dropdown-content">
                                        <Nav.Link onClick={logOut}><i className="fas fa-sign-out-alt"></i> Sign Out</Nav.Link>
                                    </div>
                                </div>
                                :
                                <div onMouseOver={handleDownArrow} className="dropdown navbar-custom">
                                    <i className="fas fa-user-circle me-2"></i>
                                    My Account
                                    <i className="fas fa-chevron-down down-arrow"></i>
                                    <div className="dropdown-content">
                                        <Nav.Link as={NavLink} to="/login"><i className="fas fa-sign-in-alt"></i> Sign In</Nav.Link>
                                        <Nav.Link as={NavLink} to="/register"><i className="fas fa-user-plus"></i> Sign Up</Nav.Link>
                                    </div>
                                </div>
                        }
                    </Navbar.Collapse>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/home" className="m-3 nav-section"> Home</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/food" className="m-3 nav-section"> Foods</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/order-review" className="m-3 nav-section"> Order-Review</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyles} to="/shipping" className="m-3 nav-section"> Shipping</Nav.Link>

                    <i className="fas fa-shopping-cart fa-2x navbar-custom"></i>
                    <Badge pill bg="info" className="badge-custom">
                        {quantity ? quantity : 0}
                    </Badge>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;