import React from "react";
import "./nav.css"

const Nav = () => {

    return(
        <div className="navContainer">
            <h1>New York Times</h1>
           <div class="dropdown">
            <button>News Topics</button>
                <div class="dropdown-content">
                <p>Arts</p>
                <p>Economy</p>
                <p>Environment</p>
                </div>
</div>
        </div>
    )
}

export default Nav