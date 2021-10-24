import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.uid ? 
                    <button className='btn btn-warning' onClick={logOut}>Log-Out</button> :
                    <NavLink to="/log-in">Log-In</NavLink>
                }
                <NavLink to="/register">Create-Account</NavLink>
            </nav>
        </div>
    );
};

export default Header;