import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const Nav = () => {

    return (
        <div className='nav-container'>
            <h1>NY Times Reader</h1>
            <div className='home-btn-container'>
                <Link to='/'>
                    <button className='home-btn'>HOME</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav;