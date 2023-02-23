import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    
    return (
        <>
        <nav>
            <h1><Link to={"/"}>Neat Garden</Link></h1>
            <ul>
                <Link to={"/herramientas"}><button>Herramientas</button></Link>
                <Link to={"/decoracion"}><button>Decoracion</button></Link>
            </ul>
            <CartWidget/>
        </nav>
        </>
    );
};

export default NavBar;
