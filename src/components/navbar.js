import React from "react";
import {Link} from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (<nav>
       <Link to={"/"}>Home</Link>
        <Link to={"/sobre"}>Sobre</Link>
    </nav>
    )
}

export default Navbar;